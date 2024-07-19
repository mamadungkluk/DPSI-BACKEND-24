const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  title: String,
  body: String,
  image: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Content', contentSchema);
