const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const file = new Schema({
    title : {
        type : String
    },
    ahther : {
        type : String
    },
    filePath : {
        type : String
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('File', file );