const User = require("../Models/user");

// Get all users
const getAllUsers = async (req, res) => {
  try {
    console.log('aa');
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error getting users' });
  }
}

// Get a single user
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error getting user' });
  }
}

// Create a new user
const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error creating user' });
  }
}

// Update an existing user
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error updating user' });
  }
}

// Delete a user
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error deleting user' });
  }
}


// Login a user
const login = async (req, res) => {
    try {
      // Find the user with the provided email
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(400).json({ message: 'Email or password is incorrect' });
      }
      // Check if the password is correct
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Email or password is incorrect' });
      }
      // Set the user as logged in
      req.session.user = user;
      res.json({ message: 'Successfully logged in' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error logging in' });
    }
  }


  // Logout a user
const logout = (req, res) => {
    try {
      // Destroy the current session
      req.session.destroy();
      res.json({ message: 'Successfully logged out' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error logging out' });
    }
  }

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  login,
  logout
};
