import mongoose from "mongoose";

const staffingRequestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    company: { type: String },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    staffingNeeds: { type: [String], required: true },
    requiredDate: { type: String, required: true },
    contactMethod: { type: String, required: true },
    contactDateTime: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("StaffingRequest", staffingRequestSchema);


