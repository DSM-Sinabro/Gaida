
const User = require('../../models/user'),
    Joi = require('joi');
exports.localLogin = async (req, res) => {
    const {
        email,
        password
    } = req.body;
    const schema = Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });

    const result = Joi.validate(req.body, schema);

    if(result.error){
        res.status(400).json({
            success : false,
            message : 'Bed request'
        });
        return; 
    }
    let user = null;
    try {
        user = await User.findByEmail(email);
    } catch (e) {
        console.log('login error : '+e);
        res.status(500).json({
            success : false,
            message : 'Server error'
        });
        return;

    }
    let compare = null;
    if(user){
        try {
            compare = await user.validatePassword(password);
        } catch (e) {
            console.log('login error : '+e);
            res.status(500).json({
                success : false,
                message : 'Server error'
            });
            return;

        }
    }
    if(compare){
        let token = null;
        let refreshToken = null;
        try {
            token = await user.generateToken(user);
            refreshToken = await user.generateRefreshToken(user);
            await User.updateTokenByEmail(email, refreshToken);
        } catch (e) {
            console.log('login error : '+e);
            res.status(500).json({
                success : false,
                message : 'Server error'
            });
            return;
        }
        

        res.status(200).json({
            success : true,
            message : 'Success',
            token : token,
            refreshToken : refreshToken
        });
    } else {
        res.status(403).json({
            success : false,
            message : 'Forbidden'
        });
    }
    
};

exports.createUser = async (req, res) => {
    const {
        email,
        password,
        username
    } = req.body;
    const schema = Joi.object().keys({
        username: Joi.string().alphanum().min(4).max(20).required(),
        email: Joi.string().email().required(),
        password: Joi.string().required().min(4)
    });

    const result = Joi.validate(req.body, schema);

    if(result.error) {
        res.status(400).json({
            success : false,
            message : 'Bed request'
        });
        return;

    }
    console.log(User.findByEmailOrUsername({username, email}));
    let existing = null;
    try {
        existing = await User.findByEmailOrUsername(req.body);
        console.log(existing);

    } catch (e) {
        console.log('findByEmailOrUsername  error : '+e);
        res.status(500).json({
            success : false,
            message : `Server error ${e}` 
        });
        return;

    }
    if(existing) {
        res.status(409).json({
            success : false,
            message : `${existing.email === email ? 'email' : 'username'} is Overlap`
        });
        return;
    }
    // let user = null;
    try {
        // user = await User.createUser({username, email, password});
        await User.createUser({username, email, password});
    } catch (e) {
        console.log('createUser error : '+e);
        res.status(500).json({
            success : false,
            message :  'Server error'
        });
        return;

    }
    // try {
    //     await mailer();
    // } catch(e) {
    //     console.log('nodemailer error : '+e);
    //     res.status(500).json({
    //         success : false,
    //         message : "Server error"
    //     });
    //     return;
    // }
    res.status(200).json({
        success : true,
        message : 'success register'
    });
};

exports.logout =async (req, res) => {
    const { token } = req.headers;
    let result = null;
    try {
        result = await User.logout(token);
        console.log(result);
    } catch (e) {

        res.status(500).json({
            success : false,
            message :  'Server error'
        });
        return;
    }
    if(result){
        res.status(200).json({
            success : true,
            message : 'success logout'
        });
    }else {
        res.status(500).json({
            success : false,
            message :  'Server error'
        });
        return;
    }
    
};

exports.checkEmail = async (req, res) => {
    const {
        email
    } = req.body;
    let result = null;
    try {
        result = await User.findByEmail( email );
    } catch (e) {
        console.log('checkEmail error : '+e);
        res.status(500).json({
            success : false,
            message :  'Server error'
        });
        return;
    }
    if(!result){
        res.status(200).json({
            success: true,
            message : 'Success check email'
        });
    } else {
        res.status(403).json({
            success: false,
            message : 'fail overlap email'
        });
    }
};

exports.checkUsername = async (req, res) => {
    const {
        username
    } = req.body;
    let result = null;
    try {
        result = await User.findByUsername({username});
    } catch (e) {
        console.log('checkUsername error : '+e);
        res.status(500).json({
            success : false,
            message :  'Server error'
        });
        return;
    }
    if(!result){
        res.status(200).json({
            success: true,
            message : 'Success check username'
        });
    } else {
        res.status(403).json({
            success: false,
            message : 'fail overlap username'
        });
    }
};

exports.checkToken = (req, res) => {
    const { user } = req.body;
    if(!user) {
        res.status(403).json({
            success: false,
            message : 'Forhidden'
        });
    }
    req.body = user.profile;
};

// exports.refreshToken = async (req, res ) => {
//     const {
//         refreshtoken
//     } = req.headers;
//     let lll = null;
//     let token = null;
//     try {
//         lll = await User.findByEmail('gsw2205@gmail.com');
//         token = await lll.generateToken();
//     } catch(e){
//         return e;
//     }
//     res.status(200).json({
//         token
//     });
// };
exports.refreshToken = async (req, res) => {
    const {
        refreshtoken
    } = req.headers;
    let user = null;
    try{
        user = await User.checkRefreshToken(refreshtoken);
        console.log(user);
    } catch(e){
        console.log(e);
        res.status(500).json({
            success : false,
            message :  'Server error'
        });
        return;
    }
    if(user){
        let newTokens = null;
        try {
            newTokens = await user.generateTokens();
        }catch (e) {
            console.log(e);
            res.status(500).json({
                success : false,
                message :  'Server error'
            });
            return;
        }
        
        res.status(200).json({
            success : true,
            message : 'Success',
            token : newTokens.token,
            refreshToken : newRefreshTokens.refreshToken
        });
    }else {
        res.status(403).json({
            success: false,
            message : 'Forhidden'
        });
    }
};
// const nodemailer = require('nodemailer');

// // Generate test SMTP service account from ethereal.email
// // Only needed if you don't have a real mail account for testing

// let mailer = (email) => nodemailer.createTestAccount((err, account) => {
//     // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//         service:'gmail',
//         auth: {
//             user: 'gsw2205@gmail.com', // generated ethereal user
//             pass: '1sangwoo' // generated ethereal password
//         }
//     });

//     // setup email data with unicode symbols
//     let mailOptions = {
//         from: 'Gaida auth', // sender address
//         to: `${email}`, // list of receivers
//         subject: 'Gaida auth', // Subject line
//         // text: 'Hello world?', // plain text body
//         html: '<h2>Gaida Auth Code is ..</h2> <p>123456</p>' // html body
//     };

//     // send mail with defined transport object
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return console.log(error);
//         }
//         console.log('Message sent: %s', info.messageId);
//         // Preview only available when sending through an Ethereal account
//         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

//         // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
//         // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//     });
// });