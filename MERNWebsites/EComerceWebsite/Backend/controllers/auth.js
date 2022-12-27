const User = require("../Models/user");
const sendToken = require("../utils/sendToken");
const jwt = require('jsonwebtoken');
const { now } = require("mongoose");

// Login a user
const login = async (req, res) => {
    try {
      // Find the user with the provided email
      const user = await User.findOne({ email: req.body.email });

      if (!user) {
        return res.status(400).json({ message: 'Email or password is incorrect' });
      }

      // Check if the password is correct
      const isMatch = await user.comparePassword(req.body.password);

      if (!isMatch) {
        return res.status(400).json({ message: 'Email or password is incorrect' });
      }

      req.user = user;

      sendToken(req,res);

    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error logging in' });
    }
}


  // Logout a user
const logout = (req, res) => {
    try {
      res.cookie("token", null, {
          expires: new Date(Date.now()),
          httpOnly: true,
      });

      res.status(200).json({
        success: true,
        message: "logout success!"
      })
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error logging out' });
    }
}


module.exports = {
    login,
    logout
  };