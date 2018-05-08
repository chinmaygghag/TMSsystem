const express = require('express');
const router = express.Router();
const agent_obj = require('../../models/agent');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../../config/database');
const order = require('../../models/orders');

//test
/*router.get('/register', (req, res, next)=>{
    res.send('Welcome to agents page');
 });*/


//Register
router.post('/register', function (req, res, next) {
    console.log(req);
    let newAgent = new agent_obj({
        agency_name: req.body.agency_name,
        email: req.body.email,
        name: req.body.name,
        address: req.body.address,
        registration_number: req.body.registration_number,
        username: req.body.username,
        password: req.body.password,
        activeStatus: "2",
        orders : {
            acceptOrders : 0,
            declineOrders : 0,
            receivedOrders : 0,
            deliveredOrders: 0
        },
        score : 10
    });

    agent_obj.addAgent(newAgent, function (err, agent) {
        if (err) {
            res.json({success: false, msg: 'Failed to register agent'});
        } else {
            res.json({success: true, msg: 'Agent registered successfully!'});
        }
    });
//res.send('Welcome to register page');
});

//Authenticate
router.post('/authenticate', function (req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, password);

    agent_obj.getUserByUserName(username, function (err, agent) {
        console.log(err);
        if (err) throw err;
        if (!agent) {
            console.log("agent not found");
            return res.json({success: false, msg: 'Agent not found'});
        }
        console.log("agent:", agent);
        agent_obj.comparePassword(password, agent.password, function (err, isMatch) {
            console.log("isMAtch:", isMatch);
            console.log(err);
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign({
                    "name": agent.name,
                    expiresIn: 605000
                }, "secret");
                res.json({
                    success: true,
                    token: 'JWT' + token,
                    youruser: {
                        id: agent.__id,
                        name: agent.name,
                        username: agent.username,
                        email: agent.email
                    }
                });

            } else {
                return res.json({success: false, msg: 'invalid password'});
            }

        });
    });
//console.log('entering compare password');
//console.log("password:"+password, "agent.password:"+agent.password);
});


router.post('/orderforagents',function (req,res,next) {
   const agentName = req.body.agentName;
   const status = req.body.status;

    order.getOrderForAgent(agentName,status,function (err,order) {
       if (err){
           res.json(
               {
                   success : false,
                   msg: err
               }
           )
       }  else{
           res.json(
               {
                   success : true,
                   order : order
               }
           )
       }
    });
});

router.post('/get_agent-profile',function (req,res,next) {
    const username = req.body.username;
    agent_obj.getAgentByUserName(username,function (err,agent) {
        if (err) throw err;
        else{
            res.json(
                {
                    success: true,
                    agent_obj: agent
                }
            )
        }
    });
});



router.post('/acceptDeclineOrder',function (req,res,next) {
    const orderId = req.body.orderId;
    const statusToBeDone = req.body.status;
    console.log("Order ID : "+orderId+" status : "+statusToBeDone);
    order.acceptDeclineOrder(orderId,statusToBeDone,function(err,order){
        if (err){
            res.json({success:false, msg:"Unable to Perform action"});
        }else{
            res.json({success:true, msg:"Order Updated Successfully"});
        }
    });
});




router.post('/updateStatus',function (req,res,next) {
    const orderId = req.body.orderId;
    const statusToBeUpdated=req.body.statusToBeUpdated
    console.log(statusToBeUpdated)
    //const status=req.body.status;
    //console.log(username);
    order.updateOrderStatusForAgent(orderId,statusToBeUpdated,function (err,callback) {
        if (err) throw err;
        else{
            res.json(
                {
                    success: true,
                    //orders: order
                }
            )
        }
    });
});

router.post('/getProcessedOrders',function (req,res,next) {
    const username = req.body.username;
    //const status=req.body.status;
    console.log(username);
    order.getProcessedOrdersForAgent(username,function (err,order) {
        if (err) throw err;
        else{
            res.json(
                {
                    success: true,
                    orders: order
                }
            )
        }
    });
});

router.post('/get_agent_orders',function (req,res,next) {
    const username = req.body.username;
    //const status=req.body.status;
    console.log(username);
    order.getOrderForAgent(username,function (err,order) {
        if (err) throw err;
        else{
            res.json(
                {
                    success: true,
                    orders: order
                }
            )
        }
    });
});



module.exports = router; //export the router to connect and show the page