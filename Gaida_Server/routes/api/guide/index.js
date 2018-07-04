let express = require('express'),
  router = express.Router();

const guide = require('./guide.controller');

router.route('/').post(guide.guide);
router.route('/:id').get(guide.getGuide);

module.exports = router;
