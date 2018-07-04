const express = require('express'),
  router = express.Router();
const { jwtMiddleware } = require('../../middleware/auth');

const auth = require('./auth');
const guide = require('./guide'); 
router.use('/auth', auth);

router.use('/guide', jwtMiddleware);
router.use('/guide', guide);

module.exports = router;
