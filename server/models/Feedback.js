const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    user: { type: String },
    comment: { type: String, required: true },
    sentiment: { type: String } // Positive, Neutral, Negative
});

module.exports = mongoose.model('Feedback', feedbackSchema);
