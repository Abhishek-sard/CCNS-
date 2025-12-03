import express from "express";
import nodemailer from "nodemailer";
import StaffingRequest from "../models/Staffing.js";

const router = express.Router();

// Email configuration
const staffingReceiverEmail =
  process.env.STAFFING_RECEIVER_EMAIL || "agency@ccnacare.com.au";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Create staffing request
router.post("/", async (req, res) => {
  try {
    const staffingRequest = new StaffingRequest(req.body);
    const saved = await staffingRequest.save();

    // Send email notification
    let emailStatus = "not_sent";
    try {
      const {
        name,
        company,
        email,
        phone,
        staffingNeeds,
        requiredDate,
        contactMethod,
        contactDateTime,
        description,
      } = saved;

      console.log("📧 Sending staffing request email...");
      console.log("   To:", staffingReceiverEmail);
      console.log("   Subject: New Staffing Request from", name);
      console.log("   Contact:", email, phone);

      const senderLabel = name
        ? email
          ? `${name} (${email})`
          : name
        : email || "NDIS Staffing Request";

      const emailInfo = await transporter.sendMail({
        from: `"${senderLabel}" <${process.env.EMAIL_USER}>`,
        replyTo: email,
        headers: email ? { "Reply-To": email } : undefined,
        envelope: {
          from: process.env.EMAIL_USER,
          to: staffingReceiverEmail,
        },
        to: staffingReceiverEmail,
        subject: `New Staffing Request from ${name}${company ? ` - ${company}` : ""}`,
        text: `A new staffing request has been submitted.

Name: ${name}
Company: ${company || "N/A"}
Email: ${email}
Phone: ${phone}
Staffing Needs: ${staffingNeeds.join(", ")}
Required Date: ${requiredDate}
Contact Method: ${contactMethod}
Preferred Contact Date/Time: ${contactDateTime}
Description:
${description}
`,
        html: `<h2>New Staffing Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Staffing Needs:</strong> ${staffingNeeds.join(", ")}</p>
        <p><strong>Required Date:</strong> ${requiredDate}</p>
        <p><strong>Contact Method:</strong> ${contactMethod}</p>
        <p><strong>Preferred Contact Date/Time:</strong> ${contactDateTime}</p>
        <hr/>
        <p><strong>Description:</strong></p>
        <p>${description.replace(/\n/g, "<br/>")}</p>`,
      });

      emailStatus = "sent";
      console.log("✅ Email sent successfully!");
      console.log("   Message ID:", emailInfo.messageId);
      console.log("   Response:", emailInfo.response);
    } catch (emailError) {
      emailStatus = "failed";
      console.error("❌ Email sending failed:", emailError.message);
      console.error("   Staffing request saved to database, but email notification failed");
      // Don't fail the whole request if email fails - request is already saved
    }

    res.status(201).json({
      ...saved.toObject(),
      emailSent: emailStatus === "sent",
    });
  } catch (error) {
    console.error("Error creating staffing request:", error);
    res.status(400).json({ message: "Invalid staffing request data" });
  }
});

// Get all staffing requests
router.get("/", async (_req, res) => {
  try {
    const items = await StaffingRequest.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (error) {
    console.error("Error fetching staffing requests:", error);
    res.status(500).json({ message: "Failed to fetch staffing requests" });
  }
});

// Get single staffing request
router.get("/:id", async (req, res) => {
  try {
    const item = await StaffingRequest.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json(item);
  } catch (error) {
    res.status(400).json({ message: "Invalid id" });
  }
});

// Delete staffing request
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await StaffingRequest.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(400).json({ message: "Invalid id" });
  }
});

export default router;


