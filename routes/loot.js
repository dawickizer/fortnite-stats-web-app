var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Weapon = require('../models/loot/weapon');
var Material = require('../models/loot/material');
var Material_Edit = require('../models/loot/material_edit');
var Healing_Item = require('../models/loot/healing_item');
var Miscellaneous_Item = require('../models/loot/miscellaneous_item');

/* GET loot listing. */
router.get('/', function(req, res, next) {
  res.render('pages/loot', { title: 'Fortnite | Loot', active: 'loot', style: 'loot' });
});


// WEAPONS ROUTES ***************************************************************************************************

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


// HEALING ROUTES ***************************************************************************************************

/* GET healing route */
router.get('/healing', function(req, res, next) {
  
  // Get healing from database and send them to /loot/healing route to be displayed on healing.ejs
  // Sort by type then by name then by tier
  Healing_Item.find({}, null, {sort: {type: 1, tierValue: 1}}, function (err, healing) {

    if (err) console.log(err); 
    else res.render('pages/healing', { title: 'Fortnite | Healing', active: 'loot', style: 'healing', healing: healing });
  });
});

/* GET healing/:healingName listing. */
router.get('/healing/:name', function(req, res, next) {
  
  console.log(req.params);

  // Find healing with fullName matching req.params.name
  Healing_Item.findOne({ 'name': req.params.name }, function (err, healing_item) {
    if (err) console.log(err);
    else res.render('pages/healing_item', { title: 'Fortnite | ' + req.params.name, active: 'loot', style: 'healing_item', healing_item: healing_item });
  });
});


// Miscellaneous ROUTES ***************************************************************************************************

/* GET specials route */
router.get('/miscellaneous', function(req, res, next) {

  // Get miscellaneous from database and send them to /loot/miscellaneous route to be displayed on miscellaneous.ejs
  // Sort by type then by tier then by name
  Miscellaneous_Item.find({}, null, {sort: {type: 1, tierValue: 1, name: 1}}, function (err, miscellaneous) {

    if (err) console.log(err); 
    else res.render('pages/miscellaneous', { title: 'Fortnite | Miscellaneous', active: 'loot', style: 'miscellaneous', miscellaneous: miscellaneous });
  });  
});



// MATERIALS ROUTES ***************************************************************************************************

/* GET materials route */
router.get('/materials', function(req, res, next) {
  
  // Get materials from database and send them to /loot/materials route to be displayed on materials.ejs
  // Sort name in inverse order
  Material.find({}, null, {sort: {name: -1}}, function (err, materials) {

    if (err) console.log(err); 
    else res.render('pages/materials', { title: 'Fortnite | Materials', active: 'loot', style: 'materials', materials: materials});
  });  
});

/* GET materials/material-edits listing. */
router.get('/materials/material-edits', function(req, res, next) {
  
  // Get material_edits from database and send them to /loot/materials-edits route to be displayed on materials_edits.ejs
  // Sort name in inverse order
  Material_Edit.find({}, null, {sort: {type: 1}}, function (err, material_edits) {

    if (err) console.log(err); 
    else res.render('pages/material_edits', { title: 'Fortnite | Material Edits', active: 'loot', style: 'material_edits', material_edits: material_edits});
  }); 
});

/* GET materials/:materialName listing. */
router.get('/materials/:name', function(req, res, next) {
  
  console.log(req.params);

  // Find material with name matching req.params.name
  Material.findOne({ 'name': req.params.name }, function (err, material) {
    if (err) console.log(err);
    else res.render('pages/material', { title: 'Fortnite | ' + req.params.name, active: 'loot', style: 'material', material: material });
  });
});

module.exports = router;
