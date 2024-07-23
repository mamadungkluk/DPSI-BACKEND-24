const Content = require('../models/Content');

exports.searchContent = async (req, res) => {
  const { query } = req.query;
  const results = await Content.find({ $text: { $search: query } });
  res.send(results);
};
