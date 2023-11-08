const User = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: { users },
  });
};

exports.createUser = async (req, res) => {
  const newUser = await User.create(req.body);
  res.status(201).json({
    status: 'success',
    data: { user: newUser },
  });
};

exports.getUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id).populate('jobs');
  res.status(200).json({
    status: 'success',
    data: { user },
  });
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndUpdate(id);
  res.status(200).json({
    status: 'success',
    data: { user },
  });
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.status(200).json({
    status: 'success',
    data: null,
  });
};
