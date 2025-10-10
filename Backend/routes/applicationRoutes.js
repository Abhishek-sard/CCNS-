import express from "express";
import multer from "multer";
import Application from "../models/Application.js";

const router = express.Router();

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// Test endpoint to verify server is working
router.get("/test", (req, res) => {
  res.json({ message: "Applications route is working!" });
});

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

// ✅ DELETE - Delete single application
router.delete("/:id", async (req, res) => {
  console.log("DELETE route hit for ID:", req.params.id);
  try {
    const { id } = req.params;
    
    // Check if application exists
    const application = await Application.findById(id);
    if (!application) {
      console.log("Application not found for ID:", id);
      return res.status(404).json({ message: "Application not found!" });
    }

    // Delete the application
    await Application.findByIdAndDelete(id);
    console.log("Application deleted successfully for ID:", id);
    res.json({ message: "Application deleted successfully!" });
  } catch (error) {
    console.error("Error deleting application:", error);
    res.status(500).json({ message: "Error deleting application!" });
  }
});

export default router;
