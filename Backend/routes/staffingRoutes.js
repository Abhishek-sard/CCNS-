import express from "express";
import StaffingRequest from "../models/Staffing.js";

const router = express.Router();

// Create staffing request
router.post("/", async (req, res) => {
  try {
    const staffingRequest = new StaffingRequest(req.body);
    const saved = await staffingRequest.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error("Error creating staffing request:", error);
    res.status(400).json({ message: "Invalid staffing request data" });
  }
});

// Get all staffing requests
router.get("/", async (_req, res) => {
  try {
    const items = await StaffingRequest.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (error) {
    console.error("Error fetching staffing requests:", error);
    res.status(500).json({ message: "Failed to fetch staffing requests" });
  }
});

// Get single staffing request
router.get("/:id", async (req, res) => {
  try {
    const item = await StaffingRequest.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json(item);
  } catch (error) {
    res.status(400).json({ message: "Invalid id" });
  }
});

// Delete staffing request
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await StaffingRequest.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(400).json({ message: "Invalid id" });
  }
});

export default router;


