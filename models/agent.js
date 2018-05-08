const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


//creating an agent schema
const agentSchema = mongoose.Schema({
    agency_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    registration_number: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    activeStatus: {
        type: String,
        required: true
    },
    ordersAssigned: [
        String
    ],
    orders : {
        acceptOrders : Number,
        declineOrders : Number
    },
    score :{
      type: Number
    }

});

// Agent activeStatus Flag values will be
// 1 - To Be Approved,
// 2 - Approved and Active
// 3 - Declined


//so that it can be used from outside
const agent = module.exports = mongoose.model('Agent', agentSchema);

module.exports.getUserById = function (id, callback) {
    agent.findById(id, callback);
};

module.exports.addAgent = function (newAgent, callback) {
    agent.find({email: newAgent.email},function (err,docs) {
        if(docs.length){
            console.log("Exist")
        }else {
            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(newAgent.password, salt, function (err, hash) {
                    if (err) throw err;
                    newAgent.password = hash;
                    newAgent.save(callback);
                });
            });
        }
    });
};


module.exports.comparePassword = function (candidatePassword, hash, callback) {
    console.log("candidatePassword:" + candidatePassword, "hash:" + hash);
    bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
        console.log(err);
        if (err) throw err;
        callback(null, isMatch);
    });
};


module.exports.getUserByUserName = function (username, callback) {
    const query = {'username': username , 'activeStatus' : "2" };
    console.log("query:", query);
    agent.findOne(query, callback);
};

module.exports.getAgentByUserName = function (username, callback) {
    const query = {'username': username };
    console.log("query:", query);
    agent.findOne(query, callback);
};


module.exports.getAgentsByStatus = function (callback) {
    const query = ({activeStatus: '1'});
    console.log(query);
    agent.find(query,callback);

};

module.exports.getActiveAgents = function (callback) {
    const query = ({activeStatus: '2'});
    console.log(query);
    agent.find(query,callback);

};

module.exports.changeStatusForAgent = function (username,changeStatus,callback) {
     agent.findOneAndUpdate({name:username},{activeStatus: changeStatus},{new: true},function (err,agent) {
         callback(agent);
     });
};


module.exports.getAllOrders = function (username,callback) {
  const query = ({'name': username});
  agent.find(query,['orders'],callback);
};

module.exports.findAgentApproved = function(agentName,callback){

    agent.findOne({name: agentName},function (err,agent) {
        if(err) {
            console.log("agent accept orders is not updated 2")
        }
        else {

            agent.orders.acceptOrders = agent.orders.acceptOrders + 1;
            agent.score = agent.score + 2;
            agent.save(callback);
            console.log(agent.score);

        }
    });
};

module.exports.findAgentDeclined = function(agentName,callback){

    agent.findOne({name:agentName},function (err,agent) {
        if(err) {
            console.log("agent accept orders is not updated 2")
        }
        else {
            agent.orders.declineOrders = agent.orders.declineOrders + 1;
            agent.score = agent.score - 2;
            agent.save();
            console.log(agent.score);
        }
    });
};

