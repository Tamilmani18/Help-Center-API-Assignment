import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  id: { type: String, required: true, unique: true },
});

export default mongoose.model("Card", cardSchema);
