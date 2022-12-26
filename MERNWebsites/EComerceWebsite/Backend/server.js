const express = require('express');
const app = express();


const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost/mydb';

mongoose.connect(mongoURI);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB connection established');
});

connection.on('error', (error) => {
  console.log(error);
});




// Set up routes
app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});




const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');

app.use('/users', userRoutes);
app.use('/auth', authRoutes);


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));