const express = require('express');
const router = express.Router();
const {getAll,getById,create,update,deleteReview} = require('../controllers/review');

// Define the review routes
router.get('/', getAll);
router.get('/:reviewId', getById);
router.post('/', create);
router.put('/:reviewId', update);
router.delete('/:reviewId', deleteReview);

module.exports = router;