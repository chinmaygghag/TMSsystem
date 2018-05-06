const express = require('express');
const router = express.Router();
const agent = require('../../models/agent');
const order = require('../../models/orders');
const catalog = require('../../models/catalog');

router.get('/getAgents',function (req,res,next) {
    agent.getAgentsByStatus(function (err,agents) {
        if (err) throw err;
        else
            res.json({
                success: true,
                agents : agents
            })
    })
});


router.post('/changeAgentStatus',function (req,res,next) {
    console.log(req);
    const username = req.body.username;
    const changeStatus = req.body.changeStatus;
    agent.changeStatusForAgent(username, changeStatus,function (isSuccess,err) {
        if(err) throw err;
        else if(isSuccess) {
            res.json({
                success: true
            })
        }

    })
});

router.post('/test',function (req,res,next) {
    res.json({success : true});
});

router.get('/orderReceivedForMerchant',function (req,res,next) {
    order.getOrderFromOrderIDForMerchant(function (err,orders) {
        if (err) throw err;
        res.json({
            success: true,
            orders: orders
        })
    })
});

router.get('/getActiveAgents',function (req,res,next) {
    agent.getActiveAgents(function (err,agent) {
        if (err) throw err;
        res.json({
            success: true,
            agent: agent
        })
    })
});


router.post('/assignAgents',function (req,res,next) {
    //const orderId = req.body.id;
    //const agentName = req.body.agentName;
    console.log(req.body);
    // console.log("Order Id : " +orderId+ " AgentName : "+agentName);
    // order.assignAgents(orderId,agentName,function (err,callback) {
    //    if (err) {
    //        res.json({
    //             success: false
    //        });
    //        throw err;
    //    }
    //    else{
    //        res.json(
    //            {
    //                success: true,
    //                msg: "Order Assigned"
    //            }
    //        )
    //    }
    // })
    res.json({
        success: true
    })
});



module.exports = router;