import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    content: { type: String, required: true },
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models["Comment"] ||
  mongoose.model("Comment", commentSchema);
