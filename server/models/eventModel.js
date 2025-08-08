// server/models/eventModel.js

const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  expectedAttendees: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
