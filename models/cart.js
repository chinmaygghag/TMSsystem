const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


const cartSchema = mongoose.Schema({
            username: String,
            catalogName : String,
            lengthEntered: String,
            totalCost: String,
            catalogImage: String,
            clothName: String
});

const cart = module.exports = mongoose.model('Cart', cartSchema);

module.exports.addToCart = function (cartItem,callback) {
    const totalCost = cartItem.lengthEntered * cartItem.perUnitLengthCost;
    cartItem.total=totalCost;
    cartItem.save(callback);
};


module.exports.getCartItems = function (username,callback) {

};

