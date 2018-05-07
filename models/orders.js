const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');



//creating a order schema
const orderSchema = mongoose.Schema({
    catalog:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    agentName:{
      type: String
    },
    address:{
      type: String,
      required: true
    },
    catalogImage:{
      type: String,
      required: true
    },
    cost:{
      type: String,
      required: true
    },
    length:{
        type: String,
        required: true
    },
    clothName:{
        type: String,
        required: true
    },
    statusForCustomer:{ // "placed", "processed", "ready", "delivered"
        type: String
        // required: true
    },
    statusForAgent:{ // "Received","Thread","Dye","Ready","Delivered", "Approved"
        type: String
        // required: true
    },
    statusForMerchant:{    // "Received","Assigned","Ready","Delivered"
        type: String
        // required: true
    }

});




const order = module.exports = mongoose.model('Order', orderSchema );


module.exports.insertOrders = function (orderDetails,callback) {
  orderDetails.save(orderDetails,callback);
};

module.exports.getOrderFromOrderID = function (orderId,callback) {
    const query = ({'_id':orderId});
    order.findOne(query,callback);
};

module.exports.getOrderHistoryForUser = function (username, callback) {
  const query = ({'username': username, 'statusForCustomer':'delivered'});
  order.find(query,callback);
};

module.exports.getActiveOrderForUser = function(username,callback){
  const query = ({"username" : username , $or:[
          {'statusForCustomer':"ready"}, {'statusForCustomer':"placed"} , {'statusForCustomer':"processed"}
      ]});
  order.find(query,callback);
};

module.exports.updateOrderStatusForCustomer = function (orderId, statusToBeUpdated,callback) {
    order.findOneAndUpdate({_id : orderId},{statusForCustomer: statusToBeUpdated},{new: true},function (err,order) {
        callback(order);
    })
    /*order.findOne({_id : orderId}, function (err,order) {
        order.statusForCustomer =  statusToBeUpdated;
        order.save(callback)
    })*/
};


module.exports.updateOrderStatusForMerchant = function (orderId, statusToBeUpdated,callback) {
    // order.findOneAndUpdate({_id : orderId},{statusForMerchant: statusToBeUpdated},{new: true},function (err,order) {
    //     callback(order);
    // })

    order.findOne({_id : orderId}, function (err,order) {
        order.statusForMerchant =  statusToBeUpdated;
        order.save(callback)
    })
};

module.exports.updateOrderStatusForAgent = function (orderId,statusToBeUpdated,callback) {
    order.findOne({_id : orderId}, function (err,order) {
        order.statusForAgent =  statusToBeUpdated;
        order.save(callback)
    })
};

module.exports.getOrderForAgent = function (agentName,status,callback) {
    const query = ({agentName: agentName, statusForAgent: status});
    order.find(query,callback);
};

module.exports.assignAgents = function (orderId,agentName,callback) {
    order.findOne({_id : orderId}, function (err,order) {
        order.agentName =  agentName;
        order.statusForAgent = "Received";
        order.statusForMerchant = "Assigned";
        order.statusForCustomer = "processed";
        order.save(callback)
    })
};

module.exports.getOrderFromOrderIDForMerchant = function (callback) {
    const query = ({'statusForMerchant' : "received"});
    order.find(query,callback);
};

module.exports.getOrderForMerchant = function (status,callback) {
    const query = ({'statusForMerchant': status});
    order.find(query,callback);
};

module.exports.acceptDeclineOrder = function (orderId,status) {
    if (status === "Accept"){
        order.findOne({_id:orderId},function(err,order){
            order.statusForAgent = "Approved";
            order.save(callback);
        })
    }else if(status === "Decline"){
        order.findOne({_id:orderId},function (err,order) {
            order.agentName =  "";
            order.statusForAgent = "Received";
            order.statusForMerchant = "Assigned";
            order.statusForCustomer = "processed";
            order.save(callback);
        })
    }
};
