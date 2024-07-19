const mongoose = require('mongoose');

const navigationSchema = new mongoose.Schema({
  menu: [String],
  searchIndex: String,
});

module.exports = mongoose.model('Navigation', navigationSchema);
