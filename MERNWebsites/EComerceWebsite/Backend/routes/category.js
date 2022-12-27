const express = require('express');
const router = express.Router();
const {getAll,getById, create, update, deleteCategory} = require('../controllers/category');

// Define the category routes
router.get('/', getAll);
router.get('/:categoryId', getById);
router.post('/', create);
router.put('/:categoryId', update);
router.delete('/:categoryId', deleteCategory);

module.exports = router;
