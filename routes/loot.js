var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Weapon = require('../models/loot/weapon');

/* GET loot listing. */
router.get('/', function(req, res, next) {
  res.render('pages/loot', { title: 'Fortnite | Loot', active: 'loot', style: 'loot' });
});

/* GET weapons route */
router.get('/weapons', function(req, res, next) {

  // Get weapons from database and send them to /loot/weapons route to be displayed on weapons.ejs
  // Sort by type then by name then by tier
  Weapon.find({}, null, {sort: {type: 1, name: 1, tierValue: 1}}, function (err, weapons) {

    if (err) console.log(err); 
    else res.render('pages/weapons', { title: 'Fortnite | Weapons', active: 'loot', style: 'weapons', weapons: weapons });
  });
});

/* GET weapons/:weaponName listing. */
router.get('/weapons/:name', function(req, res, next) {
  
  console.log(req.params);

  // Find weapon with fullName matching req.params.name
  Weapon.findOne({ 'fullName': req.params.name }, function (err, weapon) {
    if (err) console.log(err);
    else res.render('pages/weapon', { title: 'Fortnite | ' + req.params.name, active: 'loot', style: 'weapon', weapon: weapon });
  });
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
