const Navigation = require('../models/Navigation');
const Content = require('../models/Content');

exports.getNavigation = async (req, res) => {
  const navigation = await Navigation.findOne();
  res.send(navigation);
};

exports.searchContent = async (req, res) => {
  const { query } = req.query;
  const results = await Content.find({ $text: { $search: query } });
  res.send(results);
};
