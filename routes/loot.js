var express = require('express');
var router = express.Router();

/* GET loot listing. */
router.get('/', function(req, res, next) {
  res.render('pages/loot', { title: 'Loot Stats' });
});

/* GET weapons route */
router.get('/weapons', function(req, res, next) {
  res.send('This is the /loot/weapons page');
});

/* GET weapons/:weaponName listing. */
router.get('/weapons/:weaponName', function(req, res, next) {
  console.log(req.params);
  res.send('This is the loot/weapons/' + req.params.weaponName + ' page!');
});








/* GET healing route */
router.get('/healing', function(req, res, next) {
  res.send('This is the /loot/healing page');
});

/* GET specials route */
router.get('/specials', function(req, res, next) {
  res.send('This is the /loot/specials page');
});

/* GET materials route */
router.get('/materials', function(req, res, next) {
  res.send('This is the /loot/materials page');
});

module.exports = router;
