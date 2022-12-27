const Order = require('../Models/order');
const Product = require("../Models/product");

// Get all orders
exports.getAll = (request, response) => {
  Order.find({}, (err, orders) => {
    if (err) {
      response.send(err);
    } else {
      response.json(orders);
    }
  });
};

// Get a single order
exports.getById = (request, response) => {
  Order.findById(request.params.orderId, (err, order) => {
    if (err) {
      response.send(err);
    } else {
      response.json(order);
    }
  });
};

// Create a new order
exports.create = async (req, res) => {

  try {
    const newOrder = new Order(req.body);

    const orderedProductsIds = newOrder.products.map(p => p.product);
    const orderedProduct = await Product.find({_id:{$in: orderedProductsIds}});

    let totalPrice = 0;
    orderedProduct.forEach( pro =>{
      const temp = newOrder.products.find(p => p.product.toString() === pro._id.toString());
      totalPrice += temp.quantity*pro.price;
    })

    newOrder.totalPrice = totalPrice;
    
    await newOrder.save();

    // 201 - Created
    res.status(201).json({
      success: true,
      message: "Order created successfully",
      newOrder
    })
    
  } 
  catch (error) {
    // 422 - Unprocessable Entity
    res.status(422).json({
      success: false,
      message: "Error while creating an order",
      error
    })
  }
};

// Update an existing order
exports.update = (request, response) => {
  Order.findByIdAndUpdate(request.params.orderId, request.body, { new: true }, (err, order) => {
    if (err) {
      response.send(err);
    } else {
      response.json(order);
    }
  });
};


// Delete an order
exports.deleteOrder = async (req, res) => {
    try {
      await Order.findByIdAndDelete(req.params.orderId);
      res.json({ message: 'order deleted' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error deleting order' });
    }
  }
