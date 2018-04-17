const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


const cartSchema = mongoose.Schema({
    username: {
        type : String,
        required: true
    },

    catalogName : {
        type : String,
        required: true},

    lengthEntered:{
        type:  String,
        required: true},

    totalCost:{
        type: String,
        required: true},

    catalogImage:{
        type:  String,
        required: true},

    clothName:{
        type: String,
        required: true}
});

const cart = module.exports = mongoose.model('Cart', cartSchema);

module.exports.addToCart = function (cartItem,callback) {
    const totalCost = cartItem.lengthEntered * cartItem.perUnitLengthCost;
    cartItem.total=totalCost;
    cartItem.save(callback);
};


module.exports.getCartItems = function (username,callback) {
    const query = {username : username};
    cart.find(query,callback);
};


