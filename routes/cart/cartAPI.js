const express = require('express');
const router = express.Router();
const cartAPI = require('../../models/cart');



router.post('/addToCart',function (req,res) {
    let cartElement = new cartAPI({
        username: req.body.username,
        catalogName : req.body.catalogName,
        lengthEntered: req.body.lengthEntered,
        totalCost: req.body.totalCost,
        catalogImage: req.body.catalogImage,
        clothName: req.body.clothName
    });

    cartAPI.addToCart(cartElement,function (err,cartItem) {
        if (err) {
            res.json({success: false, msg: 'Failed to Add item to cart'});
        } else {
            res.json({success: true, msg: 'Item Added Successfully!'});
        }
    });
});



module.exports = router;