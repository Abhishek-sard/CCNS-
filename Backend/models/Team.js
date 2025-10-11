import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  image: { type: String, required: false },
  linkedin: { type: String, required: false },
  twitter: { type: String, required: false },
  facebook: { type: String, required: false },
  bio: { type: String, required: false },
  order: { type: Number, default: 0 }, // For ordering team members
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Team", teamSchema);
