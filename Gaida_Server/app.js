const express = require('express'),
    http = require('http'),
    // https = require('https'),
    morgan = require('morgan'),
    // path = require('path');
    bodyParser = require('body-parser'),
    // fs = require('fs'),
    mongoose = require('mongoose');

// const options = {
//     key : fs.readFileSync('./config/key.pem'),
//     cert : fs.readFileSync('./config/cert.pem')
// };


const app = express();

const config = require('./config');

// const PORT = config.PORT || 3000;
const PORT1 = 3000;
// const PORT2 = 3001;
// const jwtMiddleware = require('./lib/token');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(jwtMiddleware);


// Connecting DB
mongoose.connect(config.MONGO_URI)
    .then((response)=> {
        console.log(response);
        console.log('Successfully connected to mongodb on : '+config.MONGO_URI);
    })
    .catch((error)=>{
        console.log('Error: Could not connect to MongoDB : '+error);
    });
mongoose.connection.on('error', function(err) {
  console.log('Error: Could not connect to MongoDB.'+err);
});

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization, Content-Type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// // error handler
// app.use(function(err, req, res) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
    
// });
const { jwtMiddleware } = require('./lib/token');
app.use(jwtMiddleware);
const router = require('./routes');
app.use('/',router);
// let user = require('./controllers/auth.controller');
// app.get('/checkEmail/:email', (req, res) => {
//     res.status(200).json("fasd");
// });

// app.listen(PORT1,() => {
//     console.log("express test server");
// })
http.createServer(app).listen(PORT1, () => {
    console.log(`Node.js http Server running on port ${PORT1}`);
});
// https.createServer(options, app).listen(PORT2, () => {
//     console.log(`Node.js https Server running on port ${PORT2}`);
// });
