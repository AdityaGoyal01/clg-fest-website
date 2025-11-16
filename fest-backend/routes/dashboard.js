const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration'); // adjust path
const authMiddleware = require('../middleware/auth');

// GET /api/admin/registrations
router.get('/registrations', authMiddleware, async (req, res) => {
  try {
    const eventName = req.admin.eventName; // from token
    const registrations = await Registration.find({ events: { $in: [eventName] } });
    res.json(registrations);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch registrations' });
  }
});

module.exports = router;

