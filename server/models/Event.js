const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    description: { type: String },
    resources: [String], // e.g., ['mic', 'speaker']
    predictedAttendance: { type: Number },
    resourceStatus: { type: Object } // e.g., { mic: 'available', projector: 'missing' }
});

module.exports = mongoose.model('Event', eventSchema);
