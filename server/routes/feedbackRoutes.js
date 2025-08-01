const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');
const analyzeFeedback = require('../ai/analyzefeedback');

router.post('/', async (req, res) => {
    try {
        const sentiment = analyzeFeedback(req.body.comment);

        const newFeedback = new Feedback({
            ...req.body,
            sentiment
        });

        await newFeedback.save();
        res.status(201).json(newFeedback);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.json(feedbacks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
