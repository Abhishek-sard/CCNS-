import express from "express";
import multer from "multer";
import NdisForm from "../models/NdisForm.js";

const router = express.Router();

// File Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"), // corrected
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// Submit form route
router.post("/submit", upload.single("file"), async (req, res) => {
  try {
    const data = req.body;

    const form = new NdisForm({
      ...data,
      uploadedFile: req.file ? req.file.filename : null,
    });

    await form.save();
    res.status(200).json({ message: "Form submitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to submit form" });
  }
});

// Dashboard (All submissions)
router.get("/all", async (req, res) => {
  try {
    const forms = await NdisForm.find().sort({ createdAt: -1 });
    res.json(forms);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch forms" });
  }
});

export default router;
