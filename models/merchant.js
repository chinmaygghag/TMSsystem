const mongoose = require('mongoose');
const config = require('../config/database');
const Order = require('../models/orders');
const Agent = require('../models/agent');

const merchantSchema = mongoose.Schema(
    {
        ordersReceivedFromUsers : [
            String
        ],
        rankingOfAgent : [
            {
                username : String,
                score : Number
            }
        ]
    }
);

const Merchant = module.exports = mongoose.model('Merchant',merchantSchema);



