const express = require('express'),
    http = require('http'),
    https = require('https'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    fs = require('fs');

// const options = {
//     key : fs.readFileSync('./config/key.pem'),
//     cert : fs.readFileSync('./config/cert.pem')
// };


const app = express();
// app.use(express.urlencoded());

const config = require('./config/config');

// const PORT = config.PORT || 3000;
const PORT1 = 3000;
// const PORT2 = 3001;

app.use(morgan('dev'));
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/users', require('./routes/users'));
 
//Connecting DB
const models = require("./models");
models.sequelize.authenticate().then(() => {
    console.log('Connected to SQL database');
})
.catch(err => {
    console.error('Unable to connect to SQL database:', err);
});
if(CONFIG.app==='development'){
    models.sequelize.sync();//creates tables from models
    // models.sequelize.sync({ force: true });//good for testing
}

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

app.use('/', function(req, res){
    res.statusCode = 200;//send the appropriate status code
    res.json({status:"success", message:"Parcel Pending API", data:{}})
 });
 
 // catch 404 and forward to error handler
 app.use(function(req, res, next) {
   var err = new Error('Not Found');
   err.status = 404;
   next(err);
 });
 
 // error handler
 app.use(function(err, req, res, next) {
   // set locals, only providing error in development
   res.locals.message = err.message;
   res.locals.error = req.app.get('env') === 'development' ? err : {};
 
   // render the error page
   res.status(err.status || 500);
   res.render('error');
 });

http.createServer(app).listen(PORT1, () => {
    console.log(`Node.js http Server running on port ${PORT1}`)
})
// https.createServer(options, app).listen(PORT2, () => {
//     console.log(`Node.js https Server running on port ${PORT2}`);
// });
