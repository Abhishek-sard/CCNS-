import express from "express";
import { sendAgencyEmail } from "../controllers/enquiryController.js"; 

const router = express.Router();

// POST /api/email/send-agency-enquiry
router.post("/send-agency-enquiry", sendAgencyEmail); 

export default router;
