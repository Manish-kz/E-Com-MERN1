import mongoose from "mongoose";

const homeSectionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    image: String,
    category: String,
    route: String,
    priority: Number
  },
  { timestamps: true }
);

export default mongoose.model("HomeSection", homeSectionSchema);
