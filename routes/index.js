var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Fortnite | Home', active: 'home', style: 'home' });
});

module.exports = router;
