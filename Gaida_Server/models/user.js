const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto');
const PASSWORD_SECRET = require('../config').PASSWORD_SECRET;
const { generateToken, generateRefreshToken, decodeRefreshToken } = require('../lib/token');
const User = new Schema({
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
    refreshToken : {
        type : String,
        default : null
    }
    // ,
    // check : {
    //     type : Boolean,
    //     required : true,
    //     default : false
    // }
});


function hash(password) {
    return crypto.createHmac('sha256', PASSWORD_SECRET).update(password).digest('hex');
}
User.statics.updateTokenByEmail = function(email, refreshToken){
    // return this.update({email:email},{$set:{refreshToken: token}},{new:true});
    return this.update({'email':email},{$set:{'refreshToken':refreshToken}},{new: true},(err, raw)=>{
        if(err) return (err);
        return raw;
    });
};
User.methods.updateTokenBy_id = function(_id, refreshToken){
    // return this.update({email:email},{$set:{refreshToken: token}},{new:true});
    return this.update({'_id':_id},{$set:{'refreshToken':refreshToken}},{new: true},(err, raw)=>{
        if(err) return (err);
        return raw;
    });
};
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
};
User.statics.findAll = function() {
    return this.find({});
};

User.statics.createUser = function({ username, email, password}) {
    const user = new this({
        profile : {
            username
        },
        email,
        password: hash(password)
    });

    return user.save();
};
User.methods.validatePassword = function(password) {
    const hashed = hash(password);
    return this.password === hashed;
};
User.methods.generateToken = function() {
    const payload = {
        _id: this._id,
        profile: this.profile
    };
    return generateToken(payload, 'user');
};
User.methods.generateRefreshToken = function() {
    const payload = {
        _id: this._id
    };
    return generateRefreshToken(payload, 'user');
};
User.statics.checkRefreshToken = async function(refreshToken) {
    let decoded = null;
    let user = null;
    let decoded2 = null;
    try {
        decoded = await decodeRefreshToken(refreshToken);
        console.log(decoded.payload._id);
        user = await this.findOne({'_id':decoded.payload._id});
        console.log(user);
        if(user){
            decoded2 = await decodeRefreshToken(user.refreshToken);
            if(decoded.payload.uid == decoded2.payload.uid){
                console.log(decoded.payload.uid == decoded2.payload.uid);
                return user;
            }else {
                return null;
            }
        }else {
            return null;
        }
    } catch(e){
        return e;
    }
};
User.statics.logout = function(token) {
    return decodeRefreshToken(token)
        .then(result => {
                return this.update({'_id':result.payload._id},{$set:{'refreshToken':null}});
            }   
        )
        .then(nResult =>
            nResult
        )
        .catch(err => {
            return err;
        });
};
User.statics.test = async function(test) {
    let result = null;
    try{
         result = await decodeRefreshToken(test);

    } catch(e) {
        return e;
    }
    return result;
};
module.exports = mongoose.model('User', User );