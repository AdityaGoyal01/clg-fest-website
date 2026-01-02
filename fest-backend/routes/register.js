const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');
const axios = require('axios');

router.post('/', async (req, res) => {
  try {
    const { name, branch, phone, email, events } = req.body;

    const newEntry = new Registration({ name, branch, phone, email, events });
    await newEntry.save();
    await axios.post('http://localhost:5678/webhook-test/fest-register', {
      name,
      branch,
      phone,
      email,
      events,
      registrationId: newEntry._id
    });

    res.status(201).json({ message: 'Registration successful' });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong', details: err.message });
  }
});

module.exports = router;
