const express = require('express'),
  router = express.Router();
const { jwtMiddleware } = require('../../../middleware/auth');

const auth = require('./auth.controller');
router.route('/login/local').post(auth.localLogin);
router.route('/register/local').post(auth.createUser);
router.route('/logout/local').post(auth.logout);
router.route('/checkEmail/:email').get(auth.checkEmail);
router.route('/checkUsername/:username').get(auth.checkUsername);
router.route('/refreshToken').get(auth.refreshToken);

router.use('/check', jwtMiddleware);
router.route('/check').get(auth.checkToken);

module.exports = router;
