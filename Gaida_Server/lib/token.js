const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config/index').JWT_SECRET;

exports.generateToken = function(payload) {
    return new Promise(
        (resolve, reject) => {
            jwt.sign(
                payload,
                JWT_SECRET,
                {
                    expiresIn: '7d'
                }, (error, token) => {
                    if(error) reject(error);
                    resolve(token);
                }
            );
        }
    );
}
exports.decodeToken = function(token) {
    return new Promise(
        (resolve, reject) => {
            jwt.verify(token, JWT_SECRET, (error, decoded) => {
                if(error) reject(error);
                resolve(decoded);
            });
        }
    );
}

exports.jwtMiddleware = async (req, res, next) => {
    const token = req.body.token;
    if(!token) return next();
    
    try {
        const decoded = await decodeToken(token);

        if(Date.now() / 1000 - decoded.iat > 60 * 60 * 24) {
            const {
                _id, 
                profile
            } = decoded;
            const freshToken = await generateToken({_id, profile},'user');
            res.status(200).json({
                success : true,
                message : "Success",
                token : freshToken
            });
        }
        req.user = decoded;
    } catch(e) {
        req.user = null;
    }
    return next();
}
