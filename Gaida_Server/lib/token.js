const jwt = require('jsonwebtoken'),
    uid = require('uid');
const JWT_SECRET = require('../config/index').JWT_SECRET;
const JWT_SECRET2 = require('../config/index').JWT_SECRET2;

exports.generateToken = function(payload) {
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
exports.generateRefreshToken = function(payload) {
    return new Promise(
        (resolve, reject) => {
            jwt.sign(
                {
                    payload,
                    'uid' : uid(256)
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
exports.decodeToken = function(token) {
    return new Promise(
        (resolve, reject) => {
            jwt.verify(token, JWT_SECRET, (error, decoded) => {
                if(error) reject(error);
                resolve(decoded);
            });
        }
    );
};
exports.decodeRefreshToken = function(token) {
    return new Promise(
        (resolve, reject) => {
            jwt.verify(token, JWT_SECRET2, (error, decoded) => {
                if(error) reject(error);
                resolve(decoded);
            });
        }
    );
};
exports.jwtMiddleware = async (req, res, next) => {
    const token = req.headers.token;
    if(!token) return next();
    
    try {
        const decoded = await decodeToken(token);

        if(Date.now() / 1000 - decoded.iat > 60 * 60 * 24) {
            const {
                _id, 
                profile
            } = decoded;
            const freshToken = await generateToken({_id, profile},'user');
            req.headers.token=freshToken;
        }
        req.user = decoded;
    } catch(e) {
        req.user = null;
    }
    return next();
};
exports.refreshToken = async function(refreshToken) {
    try {
        const decoded = await decodeRefreshToken(refreshToken);
        
    } catch(e) {
        return err;
    }
};