import mongoose from "mongoose";

const ReportSchema = new mongoose.Schema({
  username: { type: String, unique: true },

  profile: Object,
  topRepos: Array,
  languages: Array,
  scores: Object,

  shareUrl: String, // ✅ important

  createdAt: { type: Date, default: Date.now },
  expiresAt: {
    type: Date,
    default: () => Date.now() + 24 * 60 * 60 * 1000,
    index: { expires: 0 },
  },
});

export default mongoose.model("Report", ReportSchema);