const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const predictAttendance = require('../ai/predictattendance');
const manageResources = require('../ai/manageresources');

router.post('/', async (req, res) => {
    try {
        const predictedAttendance = predictAttendance(req.body);
        const resourceStatus = manageResources(
            req.body.resources || [],
            ['mic', 'speaker', 'projector']
        );

        const newEvent = new Event({
            ...req.body,
            predictedAttendance,
            resourceStatus
        });

        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

