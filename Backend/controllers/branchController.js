import mongoose from "mongoose";
import Branch from "../models/Branch.js";

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
    res
      .status(500)
      .json({
        message: "Server error while deleting branch",
        error: error.message,
      });
  }
};
