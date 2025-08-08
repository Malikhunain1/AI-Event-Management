// server/routes/eventRoutes.js

const express = require("express");
const router = express.Router();
const Event = require("../models/eventModel");

// POST route to create a new event
router.post("/create", async (req, res) => {
  try {
    console.log("📥 Event Data Received:", req.body);
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.status(201).json({ message: "✅ Event created successfully" });
  } catch (err) {
    console.error("❌ Error creating event:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ NEW: GET all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find(); // get all events
    res.json(events);
  } catch (err) {
    console.error("❌ Error fetching events:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
