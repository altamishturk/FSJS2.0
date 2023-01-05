const User = require("../Models/user");
const sendToken = require('../utils/sendToken');

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error getting users' });
  }
}

// Get a single user
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error getting user' });
  }
}

// Get a logged in user
exports.getLoggedInUser = async (req, res) => {
  try {
    res.json(req.user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error getting user' });
  }
}

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    req.user = user;
    sendToken(req,res);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error creating user' });
  }
}

// Update an existing user
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error updating user' });
  }
}

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.userId);
    res.json({ message: 'User deleted' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error deleting user' });
  }
}




