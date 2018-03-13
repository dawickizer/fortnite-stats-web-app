#! /usr/bin/env node

console.log('This script populates some test weapons to your database. Specified database as argument - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

// Get weapon model
var Testing = require("./models/loot/testing");
var Weapon = require('./models/loot/weapon');

// Connect to database
var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Test adding to DB
// Testing.create({
//     name: "Burst",
//     number: -1
//   },
//   function (err, small) {
//     if (err) console.log(err);
//     // saved!
// });


// Create weapon document in Database
Weapon.create({
    image: "/public/images/weapons/assault-rifle-burst.png",
    name: "assault-rifle-burst",
    type: "assault-rifle",
    tier: "common",
    closeRange: 1,
    midrange: 1,
    longRange: 1,
    maxRange: 250000,
    damagePerSecond: 47.2,
    bodyDamageClose: 27,
    headDamageClose: 67.5,
    bodyDamageMid: 27,
    headDamageMid: 67.5,
    bodyDamageLong: 27,
    headDamageLong: 67.5,
    bodyDamageMax: 27,
    headDamageMax: 67.5,
    impactDamageClose: 40,
    impactDamageMid: 40,
    impactDamageLong: 40,
    impactDamageMax: 40,
    environmentalDamageClose: 30,
    environmentalDamageMid: 30,
    environmentalDamageLong: 30,
    environmentalDamageMax: 30,
    baseSpread: .175,
    sprintSpread: 1.5,
    fallingJumpingSpread: 1.25,
    adsSpread: .65,
    standingSpread: .55,
    crouchingSpread: .75,
    horizontalRecoil: 0.25,
    horizontalRecoilGamepad: 1,
    verticalRecoil: 1.925,
    verticalRecoilGamepad: .5,
    angleMax: 25,
    angleMin: -25,
    adsRecoil: .5,
    interpSpeed: 12,
    interpSpeedRecovery: 9,
    fireRate: 1.75,
    reloadTime: 2.9,
    magazineSize: 30,
    floorLootChance: .645,
    chestLootChance: .645,
    supplyDropLootChance: 0
  },
  function (err, small) {
    if (err) console.log(err);
    // saved!
});
