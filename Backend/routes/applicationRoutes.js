import express from "express";
import multer from "multer";
import path from "path";
import nodemailer from "nodemailer";
import Application from "../models/Application.js";

const router = express.Router();

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });
const uploadsDir = path.resolve("uploads");
const vacancyReceiverEmail =
  process.env.VACANCY_RECEIVER_EMAIL ||
  process.env.RECEIVER_EMAIL ||
  "agency@ccnacare.com.au";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ POST - Submit Form (with file upload)
router.post("/", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, phone, message, vacancyTitle } = req.body;

    const application = new Application({
      name,
      email,
      phone,
      message,
      vacancyTitle,
      resume: req.file ? req.file.filename : null,
      date: new Date(),
    });

    await application.save();

    // Send email notification
    let emailStatus = "not_sent";
    try {
      const attachments = [];

      if (application.resume) {
        attachments.push({
          filename: application.resume,
          path: path.join(uploadsDir, application.resume),
        });
      }

      console.log("📧 Sending vacancy application email...");
      console.log("   To:", vacancyReceiverEmail);
      console.log("   Subject: New job application for", vacancyTitle || "CCNA Care");
      console.log("   Applicant:", name, `(${email})`);

      const emailInfo = await transporter.sendMail({
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        replyTo: email,
        to: vacancyReceiverEmail,
        subject: `New job application for ${vacancyTitle || "CCNA Care"}`,
        text: `A new job application has been submitted.

Name: ${name}
Email: ${email}
Phone: ${phone}
Vacancy: ${vacancyTitle || "Not specified"}
Message:
${message || "N/A"}
`,
        html: `<h2>New Job Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Vacancy:</strong> ${vacancyTitle || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message ? message.replace(/\n/g, "<br/>") : "N/A"}</p>`,
        attachments,
      });

      emailStatus = "sent";
      console.log("✅ Email sent successfully!");
      console.log("   Message ID:", emailInfo.messageId);
      console.log("   Response:", emailInfo.response);
    } catch (emailError) {
      emailStatus = "failed";
      console.error("❌ Email sending failed:", emailError.message);
      console.error("   Application saved to database, but email notification failed");
      // Don't fail the whole request if email fails - application is already saved
    }

    res.status(201).json({ 
      message: "Application submitted successfully!",
      emailSent: emailStatus === "sent"
    });
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({ message: "Error submitting form!" });
  }
});

// ✅ GET - Fetch all applications
router.get("/", async (req, res) => {
  try {
    const applications = await Application.find().sort({ date: -1 });
    res.json(applications);
  } catch (error) {
    console.error("Error fetching applications:", error);
    res.status(500).json({ message: "Error fetching applications" });
  }
});

// ✅ DELETE - Delete an application by ID
router.delete("/:id", async (req, res) => {
  try {
    const application = await Application.findByIdAndDelete(req.params.id);
    if (!application)
      return res.status(404).json({ message: "Application not found" });

    res.json({ message: "Application deleted successfully" });
  } catch (error) {
    console.error("Error deleting application:", error);
    res.status(500).json({ message: "Error deleting application" });
  }
});

export default router;
