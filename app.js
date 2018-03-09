const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);

mongoose.connection.on('connected',function () {
    console.log("Connected "+config.database)
});

const app = express();

app.use(bodyParser.json());


const merchants = require('./routes/merchant/merchantsAPI');
const agents = require('./routes/agent/agentsAPI');
const endUsers = require('./routes/endusers/endUsersAPI');

// PORT
const port = 3001;

// CORS Middleware
app.use(cors());

app.use('/merchants',merchants);
app.use('/agents',agents);
app.use('/endUsers',endUsers);

// app.use(passport.initialize());
// app.use(passport.session());

// require('./config/passport')(passport);


app.use(express.static(path.join(__dirname,'public')));

app.get('/',function (req,res) {
    res.send("Invalid Endpoint")
});

app.listen(port, function () {
   console.log("Server Started on Port "+port);
});