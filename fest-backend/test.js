const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://adibsp72:Aditya2005@fest.6zy3k8z.mongodb.net/?retryWrites=true&w=majority&appName=fest')
  .then(() => console.log('Connected to MongoDB Atlas!'))
  .catch(err => console.error('Connection error:', err));
