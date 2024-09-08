const express = require('express');
const cartsRepo = require('../carts');

const router = express.Router();

//Receive a post request to add an item to a cart
router.post('/cart/products', async (req, res) => {
    //Figure out the cart!
    let cart;
    if (!req.session.cartId) {
        //We don't have a cart. We need to create one...
        //and store the cart id on the req.session.cartId property
        cart = await cartsRepo.create({ items: [] });
        req.session.cartId = cart.id;
    } else {
      // We have a cart! Let's get it from the respository. 
      cart = await cartsRepo.getOne(req.session.cartId); 
    }

    //Either increment quantity for existing product
    //OR add new product to items array

    res.send('Product added to cart');
});

//Receive a GET request to show all items in cart

//Receive a post request to delete an item from a cart

module.exports = router;
