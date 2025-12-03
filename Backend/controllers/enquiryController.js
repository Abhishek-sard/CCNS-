import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// Nodemailer transporter (Gmail setup)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Send Agency inquiry email
export const sendAgencyEmail = async (req, res) => {
  try {
    const {
      participantName,
      ndisNumber,
      email,
      phone,
      serviceType,
      preferredContact,
      message,
      privacy,
    } = req.body;

    // Basic validation
    if (
      !participantName ||
      !email ||
      !phone ||
      !serviceType ||
      !preferredContact ||
      !message
    ) {
      return res
        .status(400)
        .json({ message: "All required fields must be filled." });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER, // your Gmail
      to: process.env.RECEIVER_EMAIL1 || "agency@ccnacare.com.au", // agency email
      subject: `Agency Inquiry from ${participantName}`,
      text: `
Participant Name: ${participantName}
NDIS Number: ${ndisNumber || "N/A"}
Email: ${email}
Phone: ${phone}
Service Type: ${serviceType}
Preferred Contact: ${preferredContact}
Message: ${message}
Privacy: ${privacy ? "Agreed" : "Not Agreed"}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Agency inquiry sent successfully!" });
  } catch (error) {
    console.error("Agency Email sending error:", error.message);
    res.status(500).json({ message: "Server error, email not sent" });
  }
};
