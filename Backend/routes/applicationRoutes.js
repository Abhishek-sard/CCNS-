import express from "express";
import mongoose from "mongoose";
import multer from "multer";

const router = express.Router();

//  Multer setup for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

//  Schema + Model
const applicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  resume: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const Application = mongoose.model("Application", applicationSchema);

//  POST - Submit Form (with file upload)
router.post("/", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const application = new Application({
      name,
      email,
      phone,
      message,
      resume: req.file ? req.file.filename : null,
    });

    await application.save();
    res.status(201).json({ message: "Application submitted successfully!" });
  } catch (error) {
    console.error(" Error submitting form:", error);
    res.status(500).json({ message: "Error submitting form!" });
  }
});

// ✅ GET - Fetch all applications
router.get("/", async (req, res) => {
  try {
    const applications = await Application.find().sort({ date: -1 });
    res.json(applications);
  } catch (error) {
    console.error(" Error getting applications:", error);
    res.status(500).json({ message: "Error getting applications!" });
  }
});

export default router;
