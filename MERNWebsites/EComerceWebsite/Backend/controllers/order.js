const Order = require('../Models/order');
const Product = require("../Models/product");
const bigPromice = require("../middlewares/bigPromice");

// Get all orders
exports.getAll = bigPromice(async(req, res) => {

  const orders = await Order.find();

  res.status(200).json({
    success: true,
    message: "___",
    orders
  })
 
  
});

// Get a single order
exports.getById = bigPromice(async(req, res) => {

  const order = await Order.findById(req.params.orderId);

  res.status(200).json({
    success: true,
    message: "___",
    order
  })
 
});

// Create a new order
exports.create = bigPromice(async (req, res) => {

    const order = new Order(req.body);

    const orderedProductsIds = order.products.map(p => p.product);
    const orderedProduct = await Product.find({_id:{$in: orderedProductsIds}});

    let totalPrice = 0;
    orderedProduct.forEach( pro =>{
      const temp = order.products.find(p => p.product.toString() === pro._id.toString());
      totalPrice += temp.quantity*pro.price;
    })

    order.totalPrice = totalPrice;
    
    await order.save();

    // 200 - Created
    res.status(201).json({
      success: true,
      message: "Order created successfully",
      order
    })
    
  
});

// Update an existing order
exports.update = bigPromice(async(req, res) => {

  const order = await Order.findByIdAndUpdate(req.params.orderId, req.body, { new: true });

  res.status(200).json({
    success: true,
    message: "__",
    order
  })

});


// Delete an order
exports.deleteOrder = bigPromice(async (req, res) => {

      const order = await Order.findByIdAndDelete(req.params.orderId);
      
      res.status(200).json({
        success: true,
        message: "__",
        order
      })
  
})
