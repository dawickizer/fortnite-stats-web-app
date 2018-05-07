var express = require('express');
var router = express.Router();

/* GET customizations listing. */
router.get('/', function(req, res, next) {
  res.render('pages/customizations', {title: 'Fortnite | Customizations', active: 'customizations', style: 'customizations'});
});

/* GET outfits route */
router.get('/outfits', function(req, res, next) {
  res.render('pages/outfits', {title: 'Fortnite | Outfits', active: 'customizations', style: 'outfits'});
});

/* GET emotes route */
router.get('/emotes', function(req, res, next) {
  res.render('pages/emotes', {title: 'Fortnite | Emotes', active: 'customizations', style: 'emotes'});
});

/* GET emoticons route */
router.get('/emoticons', function(req, res, next) {
  res.render('pages/emoticons', {title: 'Fortnite | Emoticons', active: 'customizations', style: 'emoticons'});
});

/* GET harvesting-tools route */
router.get('/harvesting-tools', function(req, res, next) {
  res.render('pages/harvesting-tools', {title: 'Fortnite | Harvesting Tools', active: 'customizations', style: 'harvesting-tools'});
});

/* GET gliders route */
router.get('/gliders', function(req, res, next) {
  res.render('pages/gliders', {title: 'Fortnite | Gliders', active: 'customizations', style: 'gliders'});
});

/* GET back-bling route */
router.get('/back-bling', function(req, res, next) {
  res.render('pages/back-bling', {title: 'Fortnite | Back Bling', active: 'customizations', style: 'back-bling'});
});

/* GET skydiving-trails route */
router.get('/skydiving-trails', function(req, res, next) {
  res.render('pages/skydiving-trails', {title: 'Fortnite | Skydiving Trails', active: 'customizations', style: 'skydiving-trails'});
});

/* GET loading-screens route */
router.get('/loading-screens', function(req, res, next) {
  res.render('pages/loading-screens', {title: 'Fortnite | Loading Screens', active: 'customizations', style: 'loading-screens'});
});

module.exports = router;