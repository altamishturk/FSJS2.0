const express = require('express');
const router = express.Router();
const { deleteCart, update, create, getById, getAll, getByUserId, addCartItem, removeCartItem } = require('../controllers/cart');


// Define the review routes
router.get('/', getAll);
router.get('/:cartId', getById);
router.get('/user/:userId', getByUserId);
router.post('/', create);
router.put('/:cartId', update);
router.put('/add/:cartId', addCartItem);
router.put('/remove/:cartId/:productId', removeCartItem);
router.delete('/:cartId', deleteCart);

module.exports = router;