import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema(
  { email: { type: String, required: true } },
  {
    timestamps: true,
  }
);

export default mongoose.models["Registration"] ||
  mongoose.model("Registration", registrationSchema);
