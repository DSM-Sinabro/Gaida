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

 
let db = require('./models'); 

db.sequelize
//   .sync() // 테이블 생성
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

http.createServer(app).listen(PORT1, () => {
    console.log(`Node.js http Server running on port ${PORT1}`)
})
// https.createServer(options, app).listen(PORT2, () => {
//     console.log(`Node.js https Server running on port ${PORT2}`);
// });
