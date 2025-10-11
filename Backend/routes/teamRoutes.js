import express from "express";
import multer from "multer";
import Team from "../models/Team.js";

const router = express.Router();

// Multer setup for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// GET - Get all team members
router.get("/", async (req, res) => {
  try {
    const teamMembers = await Team.find({ isActive: true }).sort({ order: 1, createdAt: -1 });
    res.json(teamMembers);
  } catch (error) {
    console.error("Error fetching team members:", error);
    res.status(500).json({ message: "Error fetching team members!" });
  }
});

// GET - Get single team member
router.get("/:id", async (req, res) => {
  try {
    const teamMember = await Team.findById(req.params.id);
    if (!teamMember) {
      return res.status(404).json({ message: "Team member not found!" });
    }
    res.json(teamMember);
  } catch (error) {
    console.error("Error fetching team member:", error);
    res.status(500).json({ message: "Error fetching team member!" });
  }
});

// POST - Create new team member
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, role, linkedin, twitter, facebook, bio, order } = req.body;

    const teamMember = new Team({
      name,
      role,
      image: req.file ? `/uploads/${req.file.filename}` : null,
      linkedin: linkedin || "",
      twitter: twitter || "",
      facebook: facebook || "",
      bio: bio || "",
      order: order || 0,
    });

    await teamMember.save();
    res.status(201).json({ message: "Team member created successfully!", teamMember });
  } catch (error) {
    console.error("Error creating team member:", error);
    res.status(500).json({ message: "Error creating team member!" });
  }
});

// PUT - Update team member
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { name, role, linkedin, twitter, facebook, bio, order, isActive } = req.body;

    const updateData = {
      name,
      role,
      linkedin: linkedin || "",
      twitter: twitter || "",
      facebook: facebook || "",
      bio: bio || "",
      order: order || 0,
      isActive: isActive !== undefined ? isActive : true,
    };

    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    const teamMember = await Team.findByIdAndUpdate(req.params.id, updateData, { new: true });
    
    if (!teamMember) {
      return res.status(404).json({ message: "Team member not found!" });
    }

    res.json({ message: "Team member updated successfully!", teamMember });
  } catch (error) {
    console.error("Error updating team member:", error);
    res.status(500).json({ message: "Error updating team member!" });
  }
});

// DELETE - Delete team member
router.delete("/:id", async (req, res) => {
  try {
    const teamMember = await Team.findByIdAndDelete(req.params.id);
    
    if (!teamMember) {
      return res.status(404).json({ message: "Team member not found!" });
    }

    res.json({ message: "Team member deleted successfully!" });
  } catch (error) {
    console.error("Error deleting team member:", error);
    res.status(500).json({ message: "Error deleting team member!" });
  }
});

export default router;
