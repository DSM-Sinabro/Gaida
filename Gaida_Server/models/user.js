const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt');
const crypto = require('crypto');
const PASSWORD_SECRET = require('../config').PASSWORD_SECRET;
const User = new Schema({
    // _id : {
    //     type : String,
    //     required : true,
    //     unique : true
    // },
    profile : {
        username : String,
        thumbnail : {
            type : String,
            default : '/static/images/default_thumbnail.png'
        }
    },
    password : {
        type : String
    },
    email : {
        type : String,
        uppercase: true
    },
    age : {
        type : Number
    },
    social : {
        facebook : {
            id : String,
            refreshToken : String
        }
    },
    createdAt: {
        type : Date,
        default : Date.now
    },
    refreshToken : String,
    check : {
        type : Boolean,
        required : true,
        default : false
    }
});


function hash(password) {
    return crypto.createHmac('sha256', PASSWORD_SECRET).update(password).digest('hex');
}
// User.pre("save", function(next){
//     const user = this;
//     if(!user.isModified("password")){
//         return next();
//     }else{
//         user.password = bcrypt.hashSync(user.password);
//         return next();
//     }
// });
User.statics.findByUsername = function(username) {
    return this.findOne({'profile.username': username}).exec();
};
User.statics.findByEmail = function(email) {
    return this.findOne({email}).exec();
};
User.statics.findByEmailOrUsername = function({username, email}) {
    return this.findOne({
        $or: [
            { 'profile.username' : username },
            { email }
        ]
    }).exec();
}
User.statics.findAll = function() {
    return this.find({});
}
User.statics.createUser = function({ username, email, password}) {
    const user = new this({
        profile : {
            username
        },
        email,
        password: hash(password)
    });

    return user.save();
}
User.methods.validatePassword = function(password) {
    const hashed = hash(password);
    // console.log(this.password);
    // console.log(hashed);
    return this.password === hashed;
}
module.exports = mongoose.model('User', User );