const express = require('express');

const router = express.Router();

//Receive a post request to add an item to a cart
router.post('/cart/products', (req, res) => {
    //Figure out the cart!

    //Either increment quantity for existing product
    //OR add new product to items array

    res.send('Product added to cart');
});

//Receive a GET request to show all items in cart

//Receive a post request to delete an item from a cart

module.exports = router;
