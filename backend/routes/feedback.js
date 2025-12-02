const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// GET all feedback
router.get('/', async (req, res) => {
    try {
        const feedback = await Feedback.find().sort({ createdAt: -1 });
        res.json(feedback);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST new feedback
router.post('/', async (req, res) => {
    const feedback = new Feedback({
        name: req.body.name,
        role: req.body.role,
        message: req.body.message,
        avatar: req.body.avatar,
        tag: req.body.tag
    });

    try {
        const newFeedback = await feedback.save();
        res.status(201).json(newFeedback);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
