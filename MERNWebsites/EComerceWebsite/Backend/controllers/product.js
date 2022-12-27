const Product = require('../Models/product');


// Get all products
exports.getAll = (request, response) => {
    Product.find({}, (err, products) => {
      if (err) {
        response.send(err);
      } else {
        response.json(products);
      }
    });
  };
  
  // Get a single product
  exports.getById = (request, response) => {
    Product.findById(request.params.productId, (err, product) => {
      if (err) {
        response.send(err);
      } else {
        response.json(product);
      }
    });
  };
  
  // Create a new product
  exports.create = (request, response) => {
    const newProduct = new Product(request.body);
    newProduct.save((err, product) => {
      if (err) {
        response.send(err);
      } else {
        response.json(product);
      }
    });
  };
  
  // Update an existing product
  exports.update = (request, response) => {
    Product.findByIdAndUpdate(request.params.productId, request.body, { new: true }, (err, product) => {
      if (err) {
        response.send(err);
      } else {
        response.json(product);
      }
    });
  };
  
  // Delete a product
  exports.deleteProduct = (request, response) => {
    Product.findByIdAndRemove(request.params.productId, (err, product) => {
      if (err) {
        response.send(err);
      } else {
        response.json({ message: 'Product deleted' });
      }
    });
  };