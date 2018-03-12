var express = require('express');
var router = express.Router();

/* GET customizations listing. */
router.get('/', function(req, res, next) {
  res.render('pages/customizations', {title: 'Customizations', active: 'customizations'});
});

/* GET skins route */
router.get('/skins', function(req, res, next) {
  res.send('This is the /customizations/skins page');
});

/* GET taunts route */
router.get('/taunts', function(req, res, next) {
  res.send('This is the /customizations/taunts page');
});

/* GET stickers route */
router.get('/stickers', function(req, res, next) {
  res.send('This is the /customizations/stickers page');
});

/* GET pickaxes route */
router.get('/pickaxes', function(req, res, next) {
  res.send('This is the /customizations/pickaxes page');
});

/* GET gliders route */
router.get('/gliders', function(req, res, next) {
  res.send('This is the /customizations/gliders page');
});

/* GET backpacks route */
router.get('/backpacks', function(req, res, next) {
  res.send('This is the /customizations/backpacks page');
});

module.exports = router;