const express = require('express');
const router = express.Router();
const {getAll,getById,create,update,deleteOrder} = require('../controllers/order');

// Define the order routes
router.get('/', getAll);
router.get('/:orderId', getById);
router.post('/', create);
router.put('/:orderId', update);
router.delete('/:orderId', deleteOrder);

module.exports = router;