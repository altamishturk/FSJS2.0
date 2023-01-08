const Review = require('../Models/review');
const bigPromice = require("../middlewares/bigPromice");

// Get all reviews
exports.getAll = bigPromice(async(req, res) => {

  const reviews = await Review.find({});
  
  res.status(200).json({
    success: true,
    message: "__",
    reviews
  })
  
});

// Get a single review
exports.getById = bigPromice(async(req, res) => {

  const review = await Review.findById(req.params.reviewId);

  res.status(200).json({
    success: true,
    message: "__",
    review
  })

});

// Create a new review
exports.create = bigPromice(async(req, res) => {

  const review = new Review(req.body);

  await review.save();

  res.status(201).json({
    success: true,
    message: "__",
    review
  })

});

// Update an existing review
exports.update = bigPromice(async(req, res) => {

  const review = await Review.findByIdAndUpdate(req.params.reviewId,req.body, { new: true });

  res.status(200).json({
    success: true,
    message: "__",
    review
  })

});

// Delete a review
exports.deleteReview = bigPromice(async(req, res) => {

  const review = await Review.findByIdAndRemove(req.params.reviewId);

  res.status(200).json({
    success: true,
    message: "__",
    review
  })

});
