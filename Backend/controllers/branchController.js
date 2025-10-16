import mongoose from "mongoose";
import Branch from "../models/Branch.js";

// Create a new branch
export const createBranch = async (req, res) => {
  try {
    const newBranch = new Branch(req.body);
    await newBranch.save();
    res.status(201).json(newBranch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBranchById = async (req, res) => {
  try {
    const branch = await Branch.findById(req.params.id);
    if (!branch) return res.status(404).json({ message: "Branch not found" });
    res.json(branch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get all branches
export const getBranches = async (req, res) => {
  try {
    const branches = await Branch.find();
    res.json(branches);
  } catch (error) {
    res.status(500).json({ message: "Error fetching branches" });
  }
};
// ✅ Update branch
export const updateBranch = async (req, res) => {
  try {
    const updated = await Branch.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "Branch not found" });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Error updating branch" });
  }
};

//delete a branch
export const deleteBranch = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid branch ID" });
    }

    // Find and delete branch
    const deletedBranch = await Branch.findByIdAndDelete(id);

    if (!deletedBranch) {
      return res.status(404).json({ message: "Branch not found" });
    }

    res.json({ message: "Branch deleted successfully", branch: deletedBranch });
  } catch (error) {
    console.error("Delete Branch Error:", error);
    res.status(500).json({
      message: "Server error while deleting branch",
      error: error.message,
    });
  }
};
