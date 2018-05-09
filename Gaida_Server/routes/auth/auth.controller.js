"use strict";

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
            message : "Bed request"
        });
        return; 
    };
    let user = null;
    try {
        user = await User.findByEmail(email);
    } catch (e) {
        console.log("login error : "+e);
        res.status(500).json({
            success : false,
            message : "Server error"
        });
        return;

    }
    let compare = null;
    console.log('here');
    if(user){
        try {
            compare = await user.validatePassword(password);
        } catch (e) {
            console.log("login error : "+e);
            res.status(500).json({
                success : false,
                message : "Server error"
            });
            return;

        }
        if(compare){
            res.status(200).json({
                success : true,
                message : "Success"
            })
        } else {
            res.status(403).json({
                success : false,
                message : "Forbidden"
            });
        }
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
            message : "Bed request"
        })
        return;

    }
    console.log(User.findByEmailOrUsername({username, email}));
    let existing = null;
    try {
        existing = await User.findByEmailOrUsername(req.body);
        console.log(existing)

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
    let user = null;
    try {
        user = await User.createUser({username, email, password});
    } catch (e) {
        console.log('createUser error : '+e);
        res.status(500).json({
            success : false,
            message : "Server error"
        });
        return;

    }
    res.status(200).json({
        success : true,
        message : "success register"
    })
};

exports.logout = (req, res) => {

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
            message : "Server error"
        });
        return;
    }
    if(!result){
        res.status(200).json({
            success: true,
            message : "Success check email"
        });
    } else {
        res.status(403).json({
            success: false,
            message : "fail overlap email"
        });
    }
};

exports.checkUsername = (req, res) => {
    const {
        username
    } = req.body;
    let result = null;
    try {
        result = await User.findByUsername(username);
    } catch (e) {
        console.log('checkUsername error : '+e);
        res.status(500).json({
            success : false,
            message : "Server error"
        });
        return;
    }
    if(!result){
        res.status(200).json({
            success: true,
            message : "Success check username"
        });
    } else {
        res.status(403).json({
            success: false,
            message : "fail overlap username"
        });
    }
};

exports.checkAuth = (req, res) => {
    
};