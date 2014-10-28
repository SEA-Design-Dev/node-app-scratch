var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'AWESOME!',
												names: 'Ben Angela and Jeni!',
												say: 'ROCK!'});
});

module.exports = router;
