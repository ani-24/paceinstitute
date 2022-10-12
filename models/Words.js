import mongoose from "mongoose";

const wordSchema = new mongoose.Schema(
  {
    mainWord: { type: String, required: true },
    hindi: { type: String, required: true },
    v2: { type: String, required: true },
    v3: { type: String, required: true },
  },
  { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("Word", wordSchema);
