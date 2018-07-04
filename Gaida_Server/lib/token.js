const jwt = require('jsonwebtoken'),
    uid = require('uid');
const JWT_SECRET = require('../config/index').JWT_SECRET;
const JWT_SECRET2 = require('../config/index').JWT_SECRET2;

exports.generateToken = (payload) => {
    return new Promise(
        (resolve, reject) => {
            jwt.sign(
                payload,
                JWT_SECRET,
                {
                    expiresIn: '1d'
                }, (error, token) => {
                    if(error) reject(error);
                    resolve(token);
                }
            );
        }
    );
};
exports.generateRefreshToken = payload => {
    return new Promise(
        (resolve, reject) => { 
            jwt.sign(
                {
                    'payload':{
                        '_id' : payload._id,
                        'uid' : uid(256)
                    }
                },
                JWT_SECRET2,
                {
                    expiresIn: '7d'
                }, (error, token) => {
                    if(error) reject(error);
                    resolve(token);
                }
            );
        }
    );
};

exports.decodeToken = token => {
    return new Promise(
        (resolve, reject) => {
            jwt.verify(token, JWT_SECRET, (error, decoded) => {
                if(error) reject(error);
                resolve(decoded);
            });
        }
    );
};

exports.decodeRefreshToken = token => {
    return new Promise(
        (resolve, reject) => {
            jwt.verify(token, JWT_SECRET2, (error, decoded) => {
                if(error) reject(error);
                resolve(decoded);
            });
        }
    );
};
