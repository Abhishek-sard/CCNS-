import express from "express";
import { sendAgencyEmail } from "../controllers/enquiryController.js";
import rateLimit from "express-rate-limit";

const router = express.Router();

// Rate limiter for agency enquiries
const enquiryLimiter = rateLimit({
  windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS1) || 60 * 60 * 1000, // 1 hour
  max: Number(process.env.RATE_LIMIT_MAX1) || 10, // default 10 per hour
  message: "Too many enquiry requests, please try again later.",
});

// GET route for testing
router.get("/send-agency-enquiry", (req, res) => {
  res.status(200).json({ message: "Agency enquiry endpoint is live!" });
});

// POST route to send agency enquiry email
router.post("/send-agency-enquiry", enquiryLimiter, sendAgencyEmail);

export default router;
