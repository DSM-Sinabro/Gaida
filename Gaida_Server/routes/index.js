let express = require('express'),
  router = express.Router();

let auth = require('./auth');

router.use('/', auth);

module.exports = router;
