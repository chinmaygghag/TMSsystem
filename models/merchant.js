const mongoose = require('mongoose');
const config = require('../config/database');


const merchantSchema = mongoose.Schema(
    {
        ordersReceivedFromUsers : [
            String
        ]
    }
);

const Merchant = module.exports = mongoose.model('Merchant',merchantSchema);