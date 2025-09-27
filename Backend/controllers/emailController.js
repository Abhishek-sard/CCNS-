import nodemailer from "nodemailer";

const validateEmail = (email) => {
  // simple regex email validation
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const sendEmail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "Name, email and message are required." });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid email address." });
    }

    // Create transporter (Gmail example). For production use SendGrid / Mailgun etc.
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Build mail options
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // show as client name but emails come from your sender
      replyTo: email, // when owner clicks reply, it'll go to the sender's email
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
      subject: subject && subject.trim().length ? subject : `Contact form message from ${name}`,
      text: `You have a new message from the contact form:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<h3>New contact message</h3>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>`,
    };

    // Send
    const info = await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: "Email sent", info: info.response || info });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({ success: false, message: "Server error sending email" });
  }
};
