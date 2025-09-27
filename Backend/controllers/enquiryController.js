import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Send NDIS inquiry email
export const sendEmail = async (req, res) => {
  try {
    const { participantName, ndisNumber, email, phone, serviceType, preferredContact, message } = req.body;

    if (!participantName || !email || !phone || !serviceType || !preferredContact || !message) {
      return res.status(400).json({ message: "All required fields must be filled" });
    }

    const receivers = process.env.RECEIVER_EMAILS.split(",");

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: receivers,
      subject: `NDIS Inquiry from ${participantName}`,
      text: `
        Participant Name: ${participantName}
        NDIS Number: ${ndisNumber || "N/A"}
        Email: ${email}
        Phone: ${phone}
        Service Type: ${serviceType}
        Preferred Contact: ${preferredContact}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Inquiry sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ message: "Server error, email not sent" });
  }
};
