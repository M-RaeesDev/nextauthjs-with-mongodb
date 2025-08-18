import mongoose from "mongoose";

const GoogleUserSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  email: { type: String, unique: true, required: true },
  image: { type: String, default: null },
  provider: { type: String, default: "google" },
  createdAt: { type: Date, default: Date.now }
});

// 👉 force collection name "GoogleUser"
export default mongoose.models.GoogleUser || mongoose.model("GoogleUser", GoogleUserSchema);
