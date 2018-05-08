const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const agent = require('./agent');




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

//const agent = mongoose.model('agent',);

module.exports.insertOrders = function (orderDetails,callback) {
  orderDetails.save(orderDetails,callback);
};

module.exports.getOrderFromOrderID = function (orderId,callback) {
    const query = ({'_id':orderId});
    order.findOne(query,callback);
};

module.exports.getOrderHistoryForUser = function (username, callback) {
  const query = ({'username': username, 'statusForCustomer':'Delivered'});
  order.find(query,callback);
};

module.exports.getActiveOrderForUser = function(username,callback){
  const query = ({"username" : username , $or:[
          {'statusForCustomer':"ready"}, {'statusForCustomer':"placed"} ,{'statusForCustomer':"Delivered"}
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
        if(err) throw err;
        else{
        order.statusForMerchant =  statusToBeUpdated;
        order.save(callback)}
    })
};

module.exports.updateOrderStatusForAgent = function (orderId,statusToBeUpdated,callback) {
    order.findOne({_id : orderId}, function (err,order) {
        if(err) throw err;
        else{
        order.statusForAgent =  statusToBeUpdated;
        order.save(callback)}
    })
};



module.exports.getWaitingOrdersforAgents = function(username,callback){
  const query = ({'agentName':username, 'statusForAgent':'Received'})
    order.find(query,callback);
};

module.exports.getOrderForAgent = function (username,callback) {
    const query = ({'agentName':username, $or:[
            {'statusForAgent':"Approved"}, {'statusForAgent':"Machinery"} ,{'statusForAgent':"supplier"}, {'statusForAgent':"Dye"}]});
    order.find(query,callback);
};

module.exports.assignAgents = function (orderId,agentName,callback) {
    order.findOne({_id : orderId}, function (err,order) {
        if(err) throw err;
        else{
        order.agentName =  agentName;
        order.statusForAgent = "Received";
        order.statusForMerchant = "Received";
        order.statusForCustomer = "processed";
        order.save(callback)}
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

module.exports.acceptDeclineOrder = function (orderId,status,callback) {
    if (status === "Accept") {
        order.findOne({_id: orderId}, function (err, order) {
            if(err) {
                console.log("agent accept orders is not updated 1")
            }else{

                order.statusForAgent = "Approved"
                order.statusForMerchant="Assigned"
                agent.findAgentApproved(order.agentName);
                order.save(callback);
            }


        })
    }
    else if(status === "Decline"){
        order.findOne({_id: orderId}, function (err, order) {
            if(err) {
                console.log("agent decline orders is not updated 1")
            }else{

                agent.findAgentDeclined(order.agentName);
                order.statusForAgent="Nothing";
                order.statusForMerchant = "Received";
                order.statusForCustomer = "processed";
                order.save(callback);
            }


        })


        }
    };


module.exports.getProcessedOrdersForAgent = function (username,callback) {
    const query = ({'agentName': username, 'statusForAgent':"Payment Received"});
    order.find(query,callback);
};



module.exports.getAllOrdersForMerchant = function (callback) {
    const query = ({ $or:[
            {'statusForMerchant':"received"}, {'statusForMerchant':"Assigned"} ,{'statusForMerchant':"Processed"}, {'statusForMerchant':"Delivered To Customer"}]});
    order.find(query,callback);
};

module.exports.updateFinalOrderStatusForAgent = function (orderId,statusToBeUpdated,statusMerchant,statusCustomer,callback) {
    order.findOne({'_id' : orderId}, function (err,order) {
        order.statusForAgent =  statusToBeUpdated;
        order.statusForMerchant='Delivered To Customer'
        order.statusForCustomer='Delivered'
        order.save(callback)
    })
};