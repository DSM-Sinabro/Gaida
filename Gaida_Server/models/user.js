const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    // bcrypt = require('bcrypt')
    crypto = require('crypto');
const PASSWORD_SECRET = require('../config').PASSWORD_SECRET;

const { generateToken, decodeToken } = require('../lib/token');
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
    refreshToken : {
        type : String,
        default : null
    },
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
User.statics.updateTokenByEmail = function({email, token}){
    // return this.update({email:email},{$set:{refreshToken: token}},{new:true});
    return this.update({'email':email},{$set:{'refreshToken':token}},{new: true},(err, raw)=>{
        if(err) return (err);
        return raw;
    });
};
// function updateTokenByEmail(user, token) {
//     return new Promise(
//         (resolve, reject) => {
//             user.update({'email':user.email},{$set:{'refreshToken':token}},{new: true},(err, raw)=>{
//                 if(err)  reject(err);
//                 resolve(token);
//         });
//     });
// }
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
    // console.log(this.password);
    // console.log(hashed);
    return this.password === hashed;
};
User.methods.generateToken = function() {
    const payload = {
        _id: this._id,
        profile: this.profile
    };

    // const findByEmailAndUpdate = new Promise(
    //     (resolve, reject) => {
    //         this.update({'email':this.email},{$set:{'refreshToken':token}},{new: true},(err, raw)=>{
    //             if(err)  reject(err);
    //             console.log(raw);
    //             resolve(token);
    //     });
    // });
    // let refresh_token = null;
    return generateToken(payload, 'user');
        // .then(token => {
        //     refresh_token = token;
        //     return this.update({'email':this.email},{$set:{'refreshToken':token}},{new: true});
        // })
        // .then(updateResult => {
        //     console.log(updateResult);
        //     return refresh_token;
        // })
        // .catch(err => {
        //     console.log(err);
        // });

    // return token;

};

User.statics.logout = function(token) {
    decodeToken(token)
        .then(result => 
            this.update({'_id':result._id},{$set:{'refreshToken':''}})
        )
        .then(nResult =>
            console.log(nResult)
        )
        .catch(err => {
            console.log(err);
        });
};
module.exports = mongoose.model('User', User );