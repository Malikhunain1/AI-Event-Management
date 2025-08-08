const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event" }, // optional
prediction: { type: String }
});

module.exports = mongoose.model("Feedback", feedbackSchema);
