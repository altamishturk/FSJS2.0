const Cart = require('../Models/cart');
const bigPromice = require("../middlewares/bigPromice");

// Get all carts
exports.getAll = bigPromice(async (req, res) => {

  const carts = await Cart.find();

  res.status(200).json({
    success: true,
    message: "___",
    carts
  })
  
});

// Get a single cart
exports.getById = bigPromice(async(req, res) => {

  const cart = await Cart.findById(req.params.cartId);

  res.status(200).json({
    success: true,
    message: "___",
    cart
  })
  
});

// Get a single cart by user id 
exports.getByUserId = bigPromice(async (req, res) => {
 
  const cart = await Cart.findOne({user: req.params.userId});

  res.status(200).json({
    success: true,
    message: "___",
    cart
  })

  
});

// add cart item 
exports.addCartItem = bigPromice(async (req, res) => {

    const cart = await Cart.findById(req.params.cartId);

    
    cart.products.push(req.body);
    
    await cart.save();

    res.status(200).json({
      success: true,
      message: "Item added to cart!",
      cart
    })
    
});

// remove cart item 
exports.removeCartItem = bigPromice(async (req, res) => {

    const cart = await Cart.findById(req.params.cartId);

    cart.products = cart.products.filter(p => p.product.toString() !== req.params.productId)

    console.log(cart.products.length);

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Item removed from cart!",
      cart
    })
    
});

// Create a new cart
exports.create = bigPromice(async(req, res) => {

  const cart = new Cart(req.body);

  await cart.save();

  res.status(201).json({
    success: true,
    message: "___",
    cart
  })
 
});

// Update an existing cart
exports.update = bigPromice(async(req, res) => {

  const cart = await Cart.findByIdAndUpdate(req.params.cartId, req.body, { new: true })

  res.status(200).json({
    success: true,
    message: "___",
    cart
  })
  
});

// Delete a cart
exports.deleteCart = bigPromice(async (req, res) => {

  const cart = await Cart.findByIdAndDelete(req.params.cartId);

  res.status(200).json({
    success: true,
    message: "___",
    cart
  })
   
});
