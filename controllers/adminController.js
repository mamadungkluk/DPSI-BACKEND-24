const Content = require('../models/Content');
const User = require('../models/user');

exports.createContent = async (req, res) => {
  const { title, body, image } = req.body;
  const newContent = new Content({ title, body, image });
  await newContent.save();
  res.status(201).send(newContent);
};

exports.updateContent = async (req, res) => {
  const { id } = req.params;
  const { title, body, image } = req.body;
  const updatedContent = await Content.findByIdAndUpdate(id, { title, body, image, updatedAt: Date.now() }, { new: true });
  res.send(updatedContent);
};

exports.getDashboard = async (req, res) => {
  const usersCount = await User.countDocuments();
  const contentCount = await Content.countDocuments();
  res.send({ usersCount, contentCount });
};
