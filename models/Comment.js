import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String, required: true },
    event: { type: ObjectId, ref: "Event", required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models["Comment"] ||
  mongoose.model("Comment", commentSchema);
