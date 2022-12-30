const express = require('express');
const productController = require('../Controllers/product');
const router = express.Router();

router.get('/', productController.getProducts);
router.get('/:productId', productController.getProductId);

module.exports = router;