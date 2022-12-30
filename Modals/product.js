const db = require('../utll/database');
const products = [];

module.exports = class Product {
    constructor(productTitle, productDescription, productSize, productPrice, productImage) {
        this.productTitle = productTitle;
        this.productDescription = productDescription;
        this.productSize = productSize;
        this.productPrice = productPrice;
        this.productImage = productImage;
    }

    save() {
        return db.execute(
            'INSERT INTO product(productTitle, productDescription, productSize, productPrice, productImage) VALUES(?, ?, ?, ?, ?)', 
            [this.productTitle, this.productDescription, this.productSize, this.productPrice, this.productImage]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM product');
    }

    static fetchOne(productId) {
        return db.execute('SELECT * FROM product where id = productId');
    }
}