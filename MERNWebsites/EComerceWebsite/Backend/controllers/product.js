const Product = require('../Models/product');
const cloudinary = require("cloudinary").v2;


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
  exports.create = async (req, res) => {
    const newProduct = new Product(req.body);

        const images = [];

        for (let i = 0; i < req.body.images.length; i++) {
          const img = await cloudinary.uploader.upload(req.body.images[i],{folder:"e-comerce-website-(completed)"})
          images.push({url: img.url,publicId: img.public_id})
        }

        newProduct.images = images;

        await newProduct.save();

        res.json(newProduct);
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