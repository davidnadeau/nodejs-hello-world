var express = require('express');
var router = express.Router();

/* GET bookmark listing. */
router.get('/', function(req, res) {
  res.send('list of bookmarks');
});

module.exports = router;
