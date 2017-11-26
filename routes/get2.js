var express = require('express');
var router = express.Router();

var os = require('os');
var hostname = os.hostname()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('get2, host: ' + hostname);
});

module.exports = router;
