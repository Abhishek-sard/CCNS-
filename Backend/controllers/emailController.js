import nodemailer from "nodemailer";

const validateEmail = (email) => {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const sendEmail = async (req, res) => {
  try {
    const {
      participantName,
      ndisNumber,
      email,
      phone,
      serviceType,
      preferredContact,
      preferredContactDateTime,
      message,
      isReferringSomeone,
      privacy,
    } = req.body;

    // Validate important fields
    if (!participantName || !email || !phone || !serviceType || !message) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing.",
      });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address.",
      });
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Compose email content
    const mailOptions = {
      from: `"CCNA Care" <${process.env.EMAIL_USER}>`, // ✅ sender must be your Gmail
      replyTo: email, // ✅ reply goes to participant
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
      subject: `NDIS Healthcare Inquiry from ${participantName}`,
      text: `
Participant Name: ${participantName}
NDIS Number: ${ndisNumber || "N/A"}
Email: ${email}
Phone: ${phone}
Service Type: ${serviceType}
Preferred Contact: ${preferredContact}
Preferred Contact Date/Time: ${preferredContactDateTime || "N/A"}
Referring Someone: ${isReferringSomeone ? "Yes" : "No"}
Privacy Agreement: ${privacy ? "Agreed" : "Not Agreed"}

Message:
${message}
  `,
      html: `
    <h2>New NDIS Healthcare Inquiry</h2>
    <p><strong>Participant Name:</strong> ${participantName}</p>
    <p><strong>NDIS Number:</strong> ${ndisNumber || "N/A"}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Service Type:</strong> ${serviceType}</p>
    <p><strong>Preferred Contact:</strong> ${preferredContact}</p>
    <p><strong>Preferred Contact Date/Time:</strong> ${
      preferredContactDateTime || "N/A"
    }</p>
    <p><strong>Referring Someone:</strong> ${
      isReferringSomeone ? "Yes" : "No"
    }</p>
    <p><strong>Privacy Agreement:</strong> ${
      privacy ? "Agreed" : "Not Agreed"
    }</p>
    <hr/>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, "<br/>")}</p>
  `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully!",
      info: info.response,
    });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while sending email.",
    });
  }
};
