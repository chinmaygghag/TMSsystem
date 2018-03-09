const express = require('express');
const router = express.Router();
const User = require('../../models/enduser');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../../config/database');

//Register
router.post('/register', function (req, res, next) {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, function (err, user) {
        if (err) {
            res.json({success: false, msg: 'Failed to register user'});
        } else {
            res.json({success: true, msg: 'User registered successfully!'});
        }
    });
//res.send('Welcome to register page');
});

//Authenticate
router.post('/authenticate', function (req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, password);
    User.getUserByUserName(username, function (err, user) {
        console.log(err);
        if (err) throw err;
        if (!user) {
            console.log("user not found");
            return res.json({success: false, msg: 'User not found'});
        }
        console.log("user:", user);
        User.comparePassword(password, user.password, function (err, isMatch) {
            console.log("isMAtch:", isMatch);
            console.log(err);
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign({
                    "name": user.name,
                    expiresIn: 605000
                }, "secret");
                res.json({
                    success: true,
                    token: 'JWT' + token,
                    youruser: {
                        id: user.__id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            } else {
                return res.json({success: false, msg: 'invalid password'});
            }

        });
    });
    console.log('entering compare password');
});

//Profile
router.get('/profile', function (req, res, next) { //passport.authenticate('jwt',{session:false}),
    console.log(req.body);
    res.json('Reached');
//res.send(req);
});

module.exports = router; //export the router to connect and show the page