const Cart = require('../Models/cart');

// Get all carts
exports.getAll = (request, response) => {
  Cart.find({}, (err, carts) => {
    if (err) {
      response.send(err);
    } else {
      response.json(carts);
    }
  });
};

// Get a single cart
exports.getById = (request, response) => {
  Cart.findById(request.params.cartId, (err, cart) => {
    if (err) {
      response.send(err);
    } else {
      response.json(cart);
    }
  });
};

// Create a new cart
exports.create = (request, response) => {
  const newCart = new Cart(request.body);
  newCart.save((err, cart) => {
    if (err) {
      response.send(err);
    } else {
      response.json(cart);
    }
  });
};

// Update an existing cart
exports.update = (request, response) => {
  Cart.findByIdAndUpdate(request.params.cartId, request.body, { new: true }, (err, cart) => {
    if (err) {
      response.send(err);
    } else {
      response.json(cart);
    }
  });
};

// Delete a cart
exports.deleteCart = async (req, res) => {
    try {
      await Cart.findByIdAndDelete(req.params.cartId);
      res.json({ message: 'cart deleted' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error deleting cart' });
    }
  }
