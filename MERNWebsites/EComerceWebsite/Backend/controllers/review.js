const Review = require('../Models/review');

// Get all reviews
exports.getAll = (request, response) => {
  Review.find({}, (err, reviews) => {
    if (err) {
      response.send(err);
    } else {
      response.json(reviews);
    }
  });
};

// Get a single review
exports.getById = (request, response) => {
  Review.findById(request.params.reviewId, (err, review) => {
    if (err) {
      response.send(err);
    } else {
      response.json(review);
    }
  });
};

// Create a new review
exports.create = (request, response) => {
  const newReview = new Review(request.body);
  newReview.save((err, review) => {
    if (err) {
      response.send(err);
    } else {
      response.json(review);
    }
  });
};

// Update an existing review
exports.update = (request, response) => {
  Review.findByIdAndUpdate(request.params.reviewId, request.body, { new: true }, (err, review) => {
    if (err) {
      response.send(err);
    } else {
      response.json(review);
    }
  });
};

// Delete a review
exports.deleteReview = (request, response) => {
  Review.findByIdAndRemove(request.params.reviewId, (err, review) => {
    if (err) {
      response.send(err);
    } else {
      response.json({ message: 'Review deleted' });
    }
  });
};
