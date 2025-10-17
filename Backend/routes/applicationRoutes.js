import express from "express";
import multer from "multer";
import path from "path";
import Application from "../models/Application.js";

const router = express.Router();

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

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
    res.status(201).json({ message: "Application submitted successfully!" });
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
