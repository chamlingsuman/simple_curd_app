const express = require("express");
const Product = require("../models/Product.js");
const router = express.Router();
const authenticateJWT = require('../middleware/auth');
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/productController.js');

router.get('/', authenticateJWT, getProducts);
router.get('/:id', authenticateJWT, getProduct);
router.post('/', authenticateJWT, createProduct);
router.put('/:id', authenticateJWT, updateProduct);
router.delete('/:id', authenticateJWT, deleteProduct);





module.exports = router;