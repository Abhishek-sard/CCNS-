import mongoose from "mongoose";

const NdisFormSchema = new mongoose.Schema({
  participantName: String,
  address: String,
  suburb: String,
  state: String,
  birthday: String,
  contactNumber: String,
  email: String,
  hobbies: String,
  accommodation: String,
  ndisNumber: String,
  planDates: String,
  planManaged: String,
  primaryDisability: String,
  allocatedHours: String,
  goals: String,
  referralName: String,
  referralCompany: String,
  referralEmail: String,
  referralPhone: String,
  uploadedFile: String, // file path
}, { timestamps: true });

export default mongoose.model("NdisForm", NdisFormSchema);
