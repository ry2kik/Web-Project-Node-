const Product = require('../Modals/product');

let topProduct = [];
const randomAnimation = ['fade-up-right', 'zoom-in', 'fade-up-left'];

exports.getAddProduct = (req, res, next) => {
    res.status(200).render('add-product', {
        pageTitle: 'Adding Normal Product'
    });
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.productTitle, req.body.productDescription, req.body.productSize, req.body.productPrice, req.body.productImage);
    product.save().then(() => {
        res.redirect('/');
    }).catch(err => {
        console.log(err);
    })
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll().then(([rows, fieldData]) => {
        res.status(200).render('home', {
            products: rows,
            randomAnimation: randomAnimation,
            pageTitle: 'Lingerings Websites'
        })
    }).catch(err => {
        console.log(err);
    });
}

exports.getProductId = (req, res, next) => {
    Product.fetchAll().then(([rows, fieldData]) => {
        res.status(200).render('product-detail', {
            products: rows,
            pageTitle: 'Product Details Page'
        });
    });
}

exports.getAddTopProduct = (req, res, next) => {
    res.status(200).render('add-top-product', {
        pageTitle: 'Adding Top Product'
    });
}

exports.postAddTopProduct = (req, res, next) => {
    topProduct.push({
        'images': req.body.imageURL
    });
}