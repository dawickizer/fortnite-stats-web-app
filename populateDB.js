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
//     name: "Test",
//     number: -1
//   },
//   function (err, small) {
//     if (err) console.log(err);
//     // saved!
// });

// Create common assault-rifle-burst weapon document in Database
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

// Create uncommon assault-rifle-burst weapon document in Database
Weapon.create({
    image: "/public/images/weapons/assault-rifle-burst.png",
    name: "assault-rifle-burst",
    type: "assault-rifle",
    tier: "uncommon",
    closeRange: 1,
    midrange: 1,
    longRange: 1,
    maxRange: 250000,
    damagePerSecond: 50.8,
    bodyDamageClose: 29,
    headDamageClose: 72.5,
    bodyDamageMid: 29,
    headDamageMid: 72.5,
    bodyDamageLong: 29,
    headDamageLong: 72.5,
    bodyDamageMax: 29,
    headDamageMax: 72.5,
    impactDamageClose: 42,
    impactDamageMid: 42,
    impactDamageLong: 42,
    impactDamageMax: 42,
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
    verticalRecoil: 1.8375,
    verticalRecoilGamepad: .5,
    angleMax: 25,
    angleMin: -25,
    adsRecoil: .5,
    interpSpeed: 12,
    interpSpeedRecovery: 9,
    fireRate: 1.75,
    reloadTime: 2.7,
    magazineSize: 30,
    floorLootChance: .258,
    chestLootChance: .258,
    supplyDropLootChance: 0
  },
  function (err, small) {
    if (err) console.log(err);
    // saved!
});

// Create rare assault-rifle-burst weapon document in Database
Weapon.create({
    image: "/public/images/weapons/assault-rifle-burst.png",
    name: "assault-rifle-burst",
    type: "assault-rifle",
    tier: "rare",
    closeRange: 1,
    midrange: 1,
    longRange: 1,
    maxRange: 250000,
    damagePerSecond: 52.5,
    bodyDamageClose: 30,
    headDamageClose: 75.0,
    bodyDamageMid: 30,
    headDamageMid: 75.0,
    bodyDamageLong: 30,
    headDamageLong: 75.0,
    bodyDamageMax: 30,
    headDamageMax: 75.0,
    impactDamageClose: 44,
    impactDamageMid: 44,
    impactDamageLong: 44,
    impactDamageMax: 44,
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
    verticalRecoil: 1.75,
    verticalRecoilGamepad: .5,
    angleMax: 25,
    angleMin: -25,
    adsRecoil: .5,
    interpSpeed: 12,
    interpSpeedRecovery: 9,
    fireRate: 1.75,
    reloadTime: 2.6,
    magazineSize: 30,
    floorLootChance: .097,
    chestLootChance: .097,
    supplyDropLootChance: 0
  },
  function (err, small) {
    if (err) console.log(err);
    // saved!
});

// Create common m4 weapon document in Database
Weapon.create({
    image: "/public/images/weapons/assault-rifle-m4.png",
    name: "assault-rifle-m4",
    type: "assault-rifle",
    tier: "common",
    closeRange: 1,
    midrange: 1,
    longRange: 1,
    maxRange: 250000,
    damagePerSecond: 165,
    bodyDamageClose: 30,
    headDamageClose: 60,
    bodyDamageMid: 30,
    headDamageMid: 60,
    bodyDamageLong: 30,
    headDamageLong: 60,
    bodyDamageMax: 30,
    headDamageMax: 60,
    impactDamageClose: 25,
    impactDamageMid: 25,
    impactDamageLong: 25,
    impactDamageMax: 25,
    environmentalDamageClose: 33,
    environmentalDamageMid: 33,
    environmentalDamageLong: 33,
    environmentalDamageMax: 33,
    baseSpread: .15,
    sprintSpread: 1.5,
    fallingJumpingSpread: 1.25,
    adsSpread: .6,
    standingSpread: .55,
    crouchingSpread: .8,
    horizontalRecoil: 0.25,
    horizontalRecoilGamepad: 1,
    verticalRecoil: 3.5,
    verticalRecoilGamepad: .5,
    angleMax: 25,
    angleMin: -25,
    adsRecoil: .5,
    interpSpeed: 12,
    interpSpeedRecovery: 6,
    fireRate: 5.5,
    reloadTime: 2.3,
    magazineSize: 30,
    floorLootChance: .518,
    chestLootChance: .518,
    supplyDropLootChance: 0
  },
  function (err, small) {
    if (err) console.log(err);
    // saved!
});

// Create uncommon m4 weapon document in Database
Weapon.create({
    image: "/public/images/weapons/assault-rifle-m4.png",
    name: "assault-rifle-m4",
    type: "assault-rifle",
    tier: "uncommon",
    closeRange: 1,
    midrange: 1,
    longRange: 1,
    maxRange: 250000,
    damagePerSecond: 170.5,
    bodyDamageClose: 31,
    headDamageClose: 62,
    bodyDamageMid: 31,
    headDamageMid: 62,
    bodyDamageLong: 31,
    headDamageLong: 62,
    bodyDamageMax: 31,
    headDamageMax: 62,
    impactDamageClose: 27,
    impactDamageMid: 27,
    impactDamageLong: 27,
    impactDamageMax: 27,
    environmentalDamageClose: 33,
    environmentalDamageMid: 33,
    environmentalDamageLong: 33,
    environmentalDamageMax: 33,
    baseSpread: .15,
    sprintSpread: 1.5,
    fallingJumpingSpread: 1.25,
    adsSpread: .6,
    standingSpread: .55,
    crouchingSpread: .8,
    horizontalRecoil: 0.25,
    horizontalRecoilGamepad: 1,
    verticalRecoil: 3.4125,
    verticalRecoilGamepad: .5,
    angleMax: 25,
    angleMin: -25,
    adsRecoil: .5,
    interpSpeed: 12,
    interpSpeedRecovery: 6,
    fireRate: 5.5,
    reloadTime: 2.2,
    magazineSize: 30,
    floorLootChance: .259,
    chestLootChance: .259,
    supplyDropLootChance: 0
  },
  function (err, small) {
    if (err) console.log(err);
    // saved!
});

// Create rare m4 weapon document in Database
Weapon.create({
    image: "/public/images/weapons/assault-rifle-m4.png",
    name: "assault-rifle-m4",
    type: "assault-rifle",
    tier: "rare",
    closeRange: 1,
    midrange: 1,
    longRange: 1,
    maxRange: 250000,
    damagePerSecond: 181.5,
    bodyDamageClose: 33,
    headDamageClose: 66,
    bodyDamageMid: 33,
    headDamageMid: 66,
    bodyDamageLong: 33,
    headDamageLong: 66,
    bodyDamageMax: 33,
    headDamageMax: 66,
    impactDamageClose: 28,
    impactDamageMid: 28,
    impactDamageLong: 28,
    impactDamageMax: 28,
    environmentalDamageClose: 33,
    environmentalDamageMid: 33,
    environmentalDamageLong: 33,
    environmentalDamageMax: 33,
    baseSpread: .15,
    sprintSpread: 1.5,
    fallingJumpingSpread: 1.25,
    adsSpread: .6,
    standingSpread: .55,
    crouchingSpread: .8,
    horizontalRecoil: 0.25,
    horizontalRecoilGamepad: 1,
    verticalRecoil: 3.325,
    verticalRecoilGamepad: .5,
    angleMax: 25,
    angleMin: -25,
    adsRecoil: .5,
    interpSpeed: 12,
    interpSpeedRecovery: 6,
    fireRate: 5.5,
    reloadTime: 2.2,
    magazineSize: 30,
    floorLootChance: .104,
    chestLootChance: .104,
    supplyDropLootChance: 0
  },
  function (err, small) {
    if (err) console.log(err);
    // saved!
});


