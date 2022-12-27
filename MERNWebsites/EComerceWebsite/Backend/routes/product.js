const express = require('express');
const router = express.Router();
const {getAll,getById,create,update,deleteProduct} = require('../controllers/product');

// Define the product routes
router.get('/', getAll);
router.get('/:productId', getById);
router.post('/', create);
router.put('/:productId', update);
router.delete('/:productId', deleteProduct);

module.exports = router;