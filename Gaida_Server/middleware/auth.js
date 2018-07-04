const { decodeToken, generateToken } = require('../lib/token');

exports.jwtMiddleware = async (req, res, next) => {
    const token = req.headers['x-access-token'] || req.headers.token || req.query.token;
    if(!token){
        return res.status(403).json({
            success: false,
            message: 'not logged in'
        });
    }
    try {
        const decoded = await decodeToken(token);
        if(Date.now() / 1000 - decoded.iat > 60 * 60 * 24) {
            const {
                _id, 
                profile
            } = decoded;
            const freshToken = await generateToken({_id, profile},'user');
            req.headers.token = freshToken;
        }
    } catch(e) {
        return res.status(403).json({
            success: false,
            message: e.message
        });
    }
    return next();
};
