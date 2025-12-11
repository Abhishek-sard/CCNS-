import mongoose from "mongoose";

const NdisFormSchema = new mongoose.Schema({
  participantName: String,
  address: String,
  suburb: String,
  state: String,
  birthday: String,
  contactNumber: String,
  email: String,
  interest: String, // matches frontend "interest"
  accommodation: String,
  ndisNumber: String,
  planDates: String,
  management: String, // matches frontend radio input "management"
  disability: String, // primaryDisability
  hours: String, // allocatedHours
  goals: String,
  refName: String, // matches frontend
  company: String, // matches frontend
  refEmail: String,
  refPhone: String,
  uploadedFile: String, // file path
}, { timestamps: true });

export default mongoose.model("NdisForm", NdisFormSchema);
