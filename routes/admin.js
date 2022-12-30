const express = require('express');
const router = express.Router();
const productController = require('../Controllers/product');


// Route that reach to the admin/add-product html page
router.get('/add-product', productController.getAddProduct);

// Route that reach to the admin/add-top-product html page
router.get('/add-top-product', productController.getAddTopProduct);

// Route it will complete the post request which is made in /admin/add-product page 
router.post('/add-product', productController.postAddProduct);

// Route it will complete the post request which is made in /admin/add-top-product page 
router.post('/add-top-product',productController.postAddTopProduct);

module.exports = router;
