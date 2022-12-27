const Category = require('../Models/category');

// Get all categories
exports.getAll = (request, response) => {
  Category.find({}, (err, categories) => {
    if (err) {
      response.send(err);
    } else {
      response.json(categories);
    }
  });
};

// Get a single category
exports.getById = (request, response) => {
  Category.findById(request.params.categoryId, (err, category) => {
    if (err) {
      response.send(err);
    } else {
      response.json(category);
    }
  });
};

// Create a new category
exports.create = (request, response) => {
  const newCategory = new Category(request.body);
  newCategory.save((err, category) => {
    if (err) {
      response.send(err);
    } else {
      response.json(category);
    }
  });
};

// Update an existing category
exports.update = (request, response) => {
  Category.findByIdAndUpdate(request.params.categoryId, request.body, { new: true }, (err, category) => {
    if (err) {
      response.send(err);
    } else {
      response.json(category);
    }
  });
};

// Delete a category
exports.deleteCategory = (request, response) => {
  Category.findByIdAndRemove(request.params.categoryId, (err, category) => {
    if (err) {
      response.send(err);
    } else {
      response.json({ message: 'Category deleted' });
    }
  });
};