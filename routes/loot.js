var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Weapon = require('../models/loot/weapon');

/* GET loot listing. */
router.get('/', function(req, res, next) {
  res.render('pages/loot', { title: 'Fortnite | Loot', active: 'loot' });
});

/* GET weapons route */
router.get('/weapons', function(req, res, next) {
  
  // Get weapons from database and send them to /loot/weapons route to be displayed on weapons.ejs
  Weapon.find({}, function (err, weapons) {
    if (err) console.log(err); 
    else res.render('pages/weapons', { title: 'Fortnite | Weapons', active: 'loot', weapons: weapons });
  });
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
