const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const router = express.Router();

// POST /api/admin/login
router.post('/login', async (req, res) => {
  const { email, password, eventName } = req.body;

  try {
    const admin = await Admin.findOne({ email, eventName });
    if (!admin) return res.status(400).json({ error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign(
      { adminId: admin._id, eventName: admin.eventName },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});


// POST /api/admin/signup
router.post('/signup', async (req, res) => {
  const { email, password, eventName } = req.body;

  try {
    const existing = await Admin.findOne({ email, eventName });
    if (existing) return res.status(400).json({ error: 'Admin already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({ email, password: hashedPassword, eventName });
    await newAdmin.save();

    res.status(201).json({ message: 'Admin created' });
  } catch (err) {
    console.error(err);
  res.status(500).json({ error: 'Server error', details: err.message });
    
  }
});


module.exports = router;
