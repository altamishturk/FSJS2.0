const express = require('express');
const router = express.Router();
const { deleteCart, update, create, getById, getAll } = require('../controllers/cart');


// Define the review routes
router.get('/', getAll);
router.get('/:cartId', getById);
router.post('/', create);
router.put('/:cartId', update);
router.delete('/:cartId', deleteCart);

module.exports = router;