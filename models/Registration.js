import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema(
  {},
  {
    timestamps: true,
  }
);

export default mongoose.models["Registration"] ||
  mongoose.model("Registration", registrationSchema);
