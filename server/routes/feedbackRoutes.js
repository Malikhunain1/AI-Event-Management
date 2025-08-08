const express = require("express");
const router = express.Router();
const axios = require("axios");
const Feedback = require("../models/Feedback");

// POST /api/feedback/submit
router.post("/submit", async (req, res) => {
  try {
    console.log("📥 Feedback received:", req.body);

    const { userName, rating, comment, eventId } = req.body;

    // 🔁 Send to Flask ML server
    const flaskResponse = await axios.post("http://127.0.0.1:8000/predict-feedback", {
      text: comment
    });

    const prediction = flaskResponse.data.prediction;
    console.log("🤖 ML Prediction:", prediction);

    // 💾 Save feedback + prediction in DB
    const feedback = new Feedback({
      userName,
      rating,
      comment,
      eventId,
      prediction // Add this field to your Mongoose model
    });

    await feedback.save();

    res.status(201).json({
      message: "✅ Feedback saved and predicted successfully!",
      prediction
    });
  } catch (error) {
    console.error("❌ Feedback submission or prediction failed:", error.message);
    res.status(500).json({ message: "Server error: Could not submit feedback" });
  }
});

module.exports = router;
