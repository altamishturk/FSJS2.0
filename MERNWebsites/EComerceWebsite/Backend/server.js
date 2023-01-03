require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');


const corsOption = {
  origin: ['http://localhost:3000'],
};
app.use(cors(corsOption));

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



app.use(express.json());



// Set up routes
app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});



// import routes
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/order');
const categoryRoutes = require('./routes/category');
const reviewRoutes = require('./routes/review');
const cartRoutes = require('./routes/cart');

// Define routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/reviews', reviewRoutes);
app.use('/api/v1/carts', cartRoutes);


// Start the server
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server listening on port ${port}`));