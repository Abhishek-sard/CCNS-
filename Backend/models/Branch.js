import mongoose from "mongoose";

const branchSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Branch", branchSchema);
