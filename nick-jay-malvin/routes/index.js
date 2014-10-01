var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {  title: 'Nicholas',
                          myVar: 'hello!',
                          myOtherVar: 'other stuff!'});
});

module.exports = router;
