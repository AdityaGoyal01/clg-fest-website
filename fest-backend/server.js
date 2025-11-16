const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
app.use('/api/register', require('./routes/register'));
const adminAuthRoutes = require('./routes/adminAuth'); 
app.use('/api/admin', adminAuthRoutes); 

const adminDashboardRoutes = require('./routes/dashboard');

app.use('/api/admin', adminDashboardRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
