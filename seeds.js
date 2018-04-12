#! /usr/bin/env node

console.log('Populating data to monogDB/fortnite-game-data');

// Get weapon model
var Weapon = require('./models/loot/weapon');
var Healing_Item = require('./models/loot/healing_item');
var Material = require('./models/loot/material');
var MaterialEdit = require('./models/loot/material_edit');

// Connect to database
var mongoose = require('mongoose');
var mongoDB = 'mongodb://dawickizer:Method2319@ds213199.mlab.com:13199/fortnite-game-data';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Seed database
function seedDB() {
    
    seedMaterials();
    seedMaterialEdits();
    seedHealing();
    seedWeapons();
}

// Seed materials
function seedMaterials() {
    
    // Remove all material collections from DB
    Material.remove({}, function(err) {
      if (err) {
        console.log("Materials couldn't be removed" + err);
        return;
      }

        // Create common wood material document in Database
        Material.create({
            image: "/images/materials/wood.png",
            fullName: "wood-common",
            name: "wood",
            type: "material",
            tier: "common",
            tierValue: 0,
            description: "Wood is one of the resources found in Fortnite. In forest zone the best source of wood are the numerous trees. In urban or suburban areas furniture and the walls and floors of certain types of buildings can provide you with wood. Wood is used for building forts.",
            quantity: 999,
            neededToBuild: 10,
            timeToBuildWall: -1,
            hpWhenPlacedWall: 100,
            hpWhenBuiltWall: 200,
            hpPerTickWall: 13,
            numTicksWall: 8,
            timeToBuildFloor: -1,
            hpWhenPlacedFloor: 95,
            hpWhenBuiltFloor: 190,
            hpPerTickFloor: 12,
            numTicksFloor: 8,
            timeToBuildStairs: -1,
            hpWhenPlacedStairs: 95,
            hpWhenBuiltStairs: 190,
            hpPerTickStairs: 12,
            numTicksStairs: 8,
            timeToBuildRoof: -1,
            hpWhenPlacedRoof: 95,
            hpWhenBuiltRoof: 190,
            hpPerTickRoof: 12,
            numTicksRoof: 8             
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });

        // Create common stone material document in Database
        Material.create({
            image: "/images/materials/stone.png",
            fullName: "stone-common",
            name: "stone",
            type: "material",
            tier: "common",
            tierValue: 0,
            description: "Stone is one of the three main resources gathered in Fortnite. The best place to gather Stone in rural areas is by breaking rocks. In urban areas it can be found by breaking down buildings made of stone or concrete. It is a necessary material for building forts.",
            quantity: 999,
            neededToBuild: 10,
            timeToBuildWall: -1,
            hpWhenPlacedWall: 90,
            hpWhenBuiltWall: 300,
            hpPerTickWall: 9,
            numTicksWall: 24,
            timeToBuildFloor: -1,
            hpWhenPlacedFloor: 84,
            hpWhenBuiltFloor: 280,
            hpPerTickFloor: 9,
            numTicksFloor: 22,
            timeToBuildStairs: -1,
            hpWhenPlacedStairs: 84,
            hpWhenBuiltStairs: 280,
            hpPerTickStairs: 9,
            numTicksStairs: 22,
            timeToBuildRoof: -1,
            hpWhenPlacedRoof: 84,
            hpWhenBuiltRoof: 280,
            hpPerTickRoof: 9,
            numTicksRoof: 22             
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });
        
        // Create common metal material document in Database
        Material.create({
            image: "/images/materials/metal.png",
            fullName: "metal-common",
            name: "metal",
            type: "material",
            tier: "common",
            tierValue: 0,
            description: "Metal is one of the resources found in Fortnite. In urban or suburban areas the easiest sources of metal are vehicles or large machinery. In rural areas the best source for metal are mines. Metal is used for building forts. It is the strongest building material.",
            quantity: 999,
            neededToBuild: 10,
            timeToBuildWall: -1,
            hpWhenPlacedWall: 80,
            hpWhenBuiltWall: 400,
            hpPerTickWall: 9,
            numTicksWall: 36,
            timeToBuildFloor: -1,
            hpWhenPlacedFloor: 74,
            hpWhenBuiltFloor: 370,
            hpPerTickFloor: 8,
            numTicksFloor: 37,
            timeToBuildStairs: -1,
            hpWhenPlacedStairs: 74,
            hpWhenBuiltStairs: 370,
            hpPerTickStairs: 8,
            numTicksStairs: 37,
            timeToBuildRoof: -1,
            hpWhenPlacedRoof: 74,
            hpWhenBuiltRoof: 370,
            hpPerTickRoof: 8,
            numTicksRoof: 37             
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });
        
    });
}

// Seed material edits
function seedMaterialEdits() {
    
    // Remove all material collections from DB
    MaterialEdit.remove({}, function(err) {
      if (err) {
        console.log("Materials couldn't be removed" + err);
        return;
      }

        // Create material_edit document in Database
        MaterialEdit.create({
            image: "/images/material_edits/floor/diagonal-floor.png",
            name: "diagonal-floor",
            type: "floor"
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });

        // Create material_edit document in Database
        MaterialEdit.create({
            image: "/images/material_edits/floor/floor.png",
            name: "floor",
            type: "floor"
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });

        // Create material_edit document in Database
        MaterialEdit.create({
            image: "/images/material_edits/floor/half-floor.png",
            name: "half-floor",
            type: "floor"
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });
        
        // Create material_edit document in Database
        MaterialEdit.create({
            image: "/images/material_edits/floor/quarter-floor.png",
            name: "quarter-floor",
            type: "floor"
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });
        
        // Create material_edit document in Database
        MaterialEdit.create({
            image: "/images/material_edits/floor/three-fourths-floor.png",
            name: "three-fourths-floor",
            type: "floor"
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });
        
        // Create material_edit document in Database
        MaterialEdit.create({
            image: "/images/material_edits/roof/diagonal-roof.png",
            name: "diagonal-roof",
            type: "roof"
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });
        
        // Create material_edit document in Database
        MaterialEdit.create({
            image: "/images/material_edits/roof/inner-corner-roof.png",
            name: "inner-corner-roof",
            type: "roof"
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });
        
        // Create material_edit document in Database
        MaterialEdit.create({
            image: "/images/material_edits/roof/outer-corner-roof.png",
            name: "outer-corner-roof",
            type: "roof"
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });
        
        // Create material_edit document in Database
        MaterialEdit.create({
            image: "/images/material_edits/roof/pyramid-roof.png",
            name: "pyramid-roof",
            type: "roof"
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });
        
        // Create material_edit document in Database
        MaterialEdit.create({
            image: "/images/material_edits/roof/side-roof.png",
            name: "side-roof",
            type: "roof"
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });
        
        // Create material_edit document in Database
        MaterialEdit.create({
            image: "/images/material_edits/stairs/half-stairs.png",
            name: "half-stairs",
            type: "stairs"
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });
        
        // Create material_edit document in Database
        MaterialEdit.create({
            image: "/images/material_edits/stairs/half-turn-stairs.png",
            name: "half-turn-stairs",
            type: "stairs"
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });
        
        // Create material_edit document in Database
        MaterialEdit.create({
            image: "/images/material_edits/stairs/quarter-turn-stairs.png",
            name: "quarter-turn-stairs",
            type: "stairs"
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });
        
        // Create material_edit document in Database
        MaterialEdit.create({
            image: "/images/material_edits/stairs/whole-stairs.png",
            name: "whole-stairs",
            type: "stairs"
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });
        
        // Create material_edit document in Database
        MaterialEdit.create({
            image: "/images/material_edits/wall/arch.png",
            name: "arch",
            type: "wall"
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });
        
        // Create material_edit document in Database
        MaterialEdit.create({
            image: "/images/material_edits/wall/diagonal-wall-bottom.png",
            name: "diagonal-wall-bottom",
            type: "wall"
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });
        
        // Create material_edit document in Database
        MaterialEdit.create({
            image: "/images/material_edits/wall/fence.png",
            name: "fence",
            type: "wall"
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });
   
        // Create material_edit document in Database
        MaterialEdit.create({
            image: "/images/material_edits/wall/half-arch.png",
            name: "half-arch",
            type: "wall"
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });
        
        // Create material_edit document in Database
        MaterialEdit.create({
            image: "/images/material_edits/wall/half-wall-with-door.png",
            name: "half-wall-with-door",
            type: "wall"
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });
        
        // Create material_edit document in Database
        MaterialEdit.create({
            image: "/images/material_edits/wall/half-wall.png",
            name: "half-wall",
            type: "wall"
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });
        
        // Create material_edit document in Database
        MaterialEdit.create({
            image: "/images/material_edits/wall/side-fence.png",
            name: "side-fence",
            type: "wall"
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });
        
        // Create material_edit document in Database
        MaterialEdit.create({
            image: "/images/material_edits/wall/side-half-wall.png",
            name: "side-half-wall",
            type: "wall"
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });
        
        // Create material_edit document in Database
        MaterialEdit.create({
            image: "/images/material_edits/wall/side-wall.png",
            name: "side-wall",
            type: "wall"
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });
        
        // Create material_edit document in Database
        MaterialEdit.create({
            image: "/images/material_edits/wall/wall-with-door-middle.png",
            name: "wall-with-door-middle",
            type: "wall"
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });
        
        // Create material_edit document in Database
        MaterialEdit.create({
            image: "/images/material_edits/wall/wall-with-door-side.png",
            name: "wall-with-door-side",
            type: "wall"
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });
      
        // Create material_edit document in Database
        MaterialEdit.create({
            image: "/images/material_edits/wall/wall-with-two-windows.png",
            name: "wall-with-two-windows",
            type: "wall"
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });
        
        // Create material_edit document in Database
        MaterialEdit.create({
            image: "/images/material_edits/wall/wall-with-window-and-door.png",
            name: "wall-with-window-and-door",
            type: "wall"
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });
        
        // Create material_edit document in Database
        MaterialEdit.create({
            image: "/images/material_edits/wall/wall-with-window-middle.png",
            name: "wall-with-window-middle",
            type: "wall"
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });
        
        // Create material_edit document in Database
        MaterialEdit.create({
            image: "/images/material_edits/wall/wall-with-window-side.png",
            name: "wall-with-window-side",
            type: "wall"
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });
        
        // Create material_edit document in Database
        MaterialEdit.create({
            image: "/images/material_edits/wall/wall.png",
            name: "wall",
            type: "wall"
          },
        function (err, small) {
          if (err) console.log(err);
          // saved!
        });
        
    });
}

// Seed healing
function seedHealing() {
    
    // Remove all healing collections from DB
    Healing_Item.remove({}, function(err) {
      if (err) {
        console.log("Healing couldn't be removed" + err);
        return;
      }

        // Create common bandages healing document in Database
        Healing_Item.create({
            image: "/images/healing/bandage.png",
            fullName: "bandages-common",
            name: "bandages",
            type: "health",
            tier: "common",
            tierValue: 0,
            description: "Bandages are a consumable healing item in Battle Royale. They are the lowest-tier healing item in the game, inferior to Slurp Juice and Medkits, and heal the player for 15 health when consumed. However, they cannot be used to bring the player above 75 health, and healing to 100% requires a Medkit or Slurp Juice. Bandages are extremely common, but take up useful inventory space, so are usually best exchanged for one or several Medkits when available.",
            timeToConsume: 4,
            timeToHeal: 0,
            shieldRestored: 0,
            healthRestored: 15,
            shieldLimit: 0,
            healthLimit: 75,
            quantity: 15, 
            floorLootChance: 0,
            chestLootChance: 0,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create uncommon med-kit healing document in Database
        Healing_Item.create({
            image: "/images/healing/med-kit.png",
            fullName: "med-kit-uncommon",
            name: "med-kit",
            type: "health",
            tier: "uncommon",
            tierValue: 1,
            description: "Medkit is a consumable healing item in Battle Royale. It restores all lost health, but no shields. It takes 10 seconds to use.",
            timeToConsume: 10,
            timeToHeal: 0,
            shieldRestored: 0,
            healthRestored: 100,
            shieldLimit: 0,
            healthLimit: 0,
            quantity: 3, 
            floorLootChance: 0,
            chestLootChance: 0,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
      
        // Create uncommon small-shield-potion healing document in Database
        Healing_Item.create({
            image: "/images/healing/small-shield-potion.png",
            fullName: "small-shield-potion-uncommon",
            name: "small-shield-potion",
            type: "shield",
            tier: "uncommon",
            tierValue: 1,
            description: "Small Shield Potion is an Uncommon consumable item in Battle Royale. The Small Shield Potion takes 2 seconds to consume, and upon consumption grants 25 Shield with a maximum of 50. They cannot be consumed while moving. They drop in stacks of 3 with a stack limit of 10. Can be found on the floor, in chests, Supply Llamas, and supply drops.",
            timeToConsume: 2,
            timeToHeal: 0,
            shieldRestored: 25,
            healthRestored: 0,
            shieldLimit: 50,
            healthLimit: 0,
            quantity: 10, 
            floorLootChance: 0,
            chestLootChance: 0,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create rare shield-potion healing document in Database
        Healing_Item.create({
            image: "/images/healing/shield-potion.png",
            fullName: "shield-potion-rare",
            name: "shield-potion",
            type: "shield",
            tier: "rare",
            tierValue: 2,
            description: "The Shield Potion is a consumable healing item in Battle Royale, which can be used to increase the player's current shield by 50 Shield points, up to a maximum of 100 Shield points after consuming two potions.",
            timeToConsume: 5,
            timeToHeal: 0,
            shieldRestored: 50,
            healthRestored: 0,
            shieldLimit: 0,
            healthLimit: 0,
            quantity: 2, 
            floorLootChance: 0,
            chestLootChance: 0,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create epic slurp-juice healing document in Database
        Healing_Item.create({
            image: "/images/healing/slurp-juice.png",
            fullName: "slurp-juice-epic",
            name: "slurp-juice",
            type: "shield_and_health",
            tier: "epic",
            tierValue: 3,
            description: "Slurp Juice is a consumable healing item in Battle Royale. Slurp Juice grants one health and one shield per second for 25 seconds (25 health and 25 shield points total). Slurp Juice can heal players all the way up to 100 health and 100 shield points. Slurp Juice can be found in Chests, Supply Drops, and Supply Llamas.",
            timeToConsume: 2,
            timeToHeal: 25,
            shieldRestored: 25,
            healthRestored: 25,
            shieldLimit: 0,
            healthLimit: 0,
            quantity: 2, 
            floorLootChance: 0,
            chestLootChance: 0,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create legendary chug-jug healing document in Database
        Healing_Item.create({
            image: "/images/healing/chug-jug.png",
            fullName: "chug-jug-legendary",
            name: "chug-jug",
            type: "shield_and_health",
            tier: "legendary",
            tierValue: 4,
            description: "Chug Jug is a legendary consumable healing item in Battle Royale. It takes 15 seconds to consume and grants the player full health and full shield.",
            timeToConsume: 15,
            timeToHeal: 0,
            shieldRestored: 100,
            healthRestored: 100,
            shieldLimit: 0,
            healthLimit: 0,
            quantity: 1, 
            floorLootChance: 0,
            chestLootChance: 0,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
    });
}

// Seed weapons
function seedWeapons() {
    
    // Remove all weapon collections from DB
    Weapon.remove({}, function(err) {
      if (err) {
        console.log("Weapons couldn't be removed" + err);
        return;
      }

        // Create common assault-rifle-burst weapon document in Database
        Weapon.create({
            image: "/images/weapons/assault-rifle-burst.png",
            fullName: "assault-rifle-burst-common",
            name: "assault-rifle-burst",
            type: "assault-rifle",
            tier: "common",
            tierValue: 0,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
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
            image: "/images/weapons/assault-rifle-burst.png",
            fullName: "assault-rifle-burst-uncommon",
            name: "assault-rifle-burst",
            type: "assault-rifle",
            tier: "uncommon",
            tierValue: 1,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
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
            image: "/images/weapons/assault-rifle-burst.png",
            fullName: "assault-rifle-burst-rare",
            name: "assault-rifle-burst",
            type: "assault-rifle",
            tier: "rare",
            tierValue: 2,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
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
            image: "/images/weapons/assault-rifle-m4.png",
            fullName: "assault-rifle-m4-common",
            name: "assault-rifle-m4",
            type: "assault-rifle",
            tier: "common",
            tierValue: 0,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
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
            image: "/images/weapons/assault-rifle-m4.png",
            fullName: "assault-rifle-m4-uncommon",
            name: "assault-rifle-m4",
            type: "assault-rifle",
            tier: "uncommon",
            tierValue: 1,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
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
            image: "/images/weapons/assault-rifle-m4.png",
            fullName: "assault-rifle-m4-rare",
            name: "assault-rifle-m4",
            type: "assault-rifle",
            tier: "rare",
            tierValue: 2,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
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
        
        // Create epic scar document in database
        Weapon.create({
            image: "/images/weapons/assault-rifle-scar.png",
            fullName: "assault-rifle-scar-epic",
            name: "assault-rifle-scar",
            type: "assault-rifle",
            tier: "epic",
            tierValue: 3,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 192.5,
            bodyDamageClose: 35,
            headDamageClose: 70,
            bodyDamageMid: 35,
            headDamageMid: 70,
            bodyDamageLong: 35,
            headDamageLong: 70,
            bodyDamageMax: 35,
            headDamageMax: 70,
            impactDamageClose: 29,
            impactDamageMid: 29,
            impactDamageLong: 29,
            impactDamageMax: 29,
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
            verticalRecoil: 3.2375,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 5.5,
            reloadTime: 2.1,
            magazineSize: 30,
            floorLootChance: .039,
            chestLootChance: .039,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create legendary scar document in database
        Weapon.create({
            image: "/images/weapons/assault-rifle-scar.png",
            fullName: "assault-rifle-scar-legendary",
            name: "assault-rifle-scar",
            type: "assault-rifle",
            tier: "legendary",
            tierValue: 4,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 198,
            bodyDamageClose: 36,
            headDamageClose: 72,
            bodyDamageMid: 36,
            headDamageMid: 72,
            bodyDamageLong: 36,
            headDamageLong: 72,
            bodyDamageMax: 36,
            headDamageMax: 72,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
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
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 5.5,
            reloadTime: 2.1,
            magazineSize: 30,
            floorLootChance: .001,
            chestLootChance: .001,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create rare assault-rifle-scoped document in database
        Weapon.create({
            image: "/images/weapons/assault-rifle-scoped.png",
            fullName: "assault-rifle-scoped-rare",
            name: "assault-rifle-scoped",
            type: "assault-rifle",
            tier: "rare",
            tierValue: 2,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 80.5,
            bodyDamageClose: 23,
            headDamageClose: 46,
            bodyDamageMid: 23,
            headDamageMid: 46,
            bodyDamageLong: 23,
            headDamageLong: 46,
            bodyDamageMax: 23,
            headDamageMax: 46,
            impactDamageClose: 28,
            impactDamageMid: 28,
            impactDamageLong: 28,
            impactDamageMax: 28,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: 0,
            standingSpread: .5,
            crouchingSpread: .75,
            horizontalRecoil: 0.2,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .7,
            interpSpeed: 9,
            interpSpeedRecovery: 8,
            fireRate: 3.5,
            reloadTime: 2.3,
            magazineSize: 20,
            floorLootChance: .052,
            chestLootChance: .052,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create epic assault-rifle-scoped document in database
        Weapon.create({
            image: "/images/weapons/assault-rifle-scoped.png",
            fullName: "assault-rifle-scoped-epic",
            name: "assault-rifle-scoped",
            type: "assault-rifle",
            tier: "epic",
            tierValue: 3,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 84,
            bodyDamageClose: 24,
            headDamageClose: 48,
            bodyDamageMid: 24,
            headDamageMid: 48,
            bodyDamageLong: 24,
            headDamageLong: 48,
            bodyDamageMax: 24,
            headDamageMax: 48,
            impactDamageClose: 29,
            impactDamageMid: 29,
            impactDamageLong: 29,
            impactDamageMax: 29,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: 0,
            standingSpread: .5,
            crouchingSpread: .75,
            horizontalRecoil: 0.2,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 2.85,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .7,
            interpSpeed: 9,
            interpSpeedRecovery: 8,
            fireRate: 3.5,
            reloadTime: 2.2,
            magazineSize: 20,
            floorLootChance: .019,
            chestLootChance: .019,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a epic minigun document in database
        Weapon.create({
            image: "/images/weapons/minigun.png",
            fullName: "minigun-epic",
            name: "minigun",
            type: "minigun",
            tier: "epic",
            tierValue: 3,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 192,
            bodyDamageClose: 16,
            headDamageClose: 40,
            bodyDamageMid: 16,
            headDamageMid: 40,
            bodyDamageLong: 16,
            headDamageLong: 40,
            bodyDamageMax: 16,
            headDamageMax: 40,
            impactDamageClose: 29,
            impactDamageMid: 29,
            impactDamageLong: 29,
            impactDamageMax: 29,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
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
            fireRate: 12,
            reloadTime: 4.8,
            magazineSize: 0,
            floorLootChance: .667,
            chestLootChance: .667,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a legendary minigun document in database
        Weapon.create({
            image: "/images/weapons/minigun.png",
            fullName: "minigun-legendary",
            name: "minigun",
            type: "minigun",
            tier: "legendary",
            tierValue: 4,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        
        
        
        
        
        
        
        
        
        
        
        // Create a uncommon pump shotgun document in database
        Weapon.create({
            image: "/images/weapons/pump-shotgun.png",
            fullName: "pump-shotgun-uncommon",
            name: "pump-shotgun",
            type: "shotgun",
            tier: "uncommon",
            tierValue: 1,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a rare pump shotgun document in database
        Weapon.create({
            image: "/images/weapons/pump-shotgun.png",
            fullName: "pump-shotgun-rare",
            name: "pump-shotgun",
            type: "shotgun",
            tier: "rare",
            tierValue: 2,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a common tactical shotgun document in database
        Weapon.create({
            image: "/images/weapons/tactical-shotgun.png",
            fullName: "tactical-shotgun-common",
            name: "tactical-shotgun",
            type: "shotgun",
            tier: "common",
            tierValue: 0,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a uncommon tactical shotgun document in database
        Weapon.create({
            image: "/images/weapons/tactical-shotgun.png",
            fullName: "tactical-shotgun-uncommon",
            name: "tactical-shotgun",
            type: "shotgun",
            tier: "uncommon",
            tierValue: 1,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a rare tactical shotgun document in database
        Weapon.create({
            image: "/images/weapons/tactical-shotgun.png",
            fullName: "tactical-shotgun-rare",
            name: "tactical-shotgun",
            type: "shotgun",
            tier: "rare",
            tierValue: 2,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a epic heavy shotgun document in database
        Weapon.create({
            image: "/images/weapons/heavy-shotgun.png",
            fullName: "heavy-shotgun-epic",
            name: "heavy-shotgun",
            type: "shotgun",
            tier: "epic",
            tierValue: 3,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a legendary heavy shotgun document in database
        Weapon.create({
            image: "/images/weapons/heavy-shotgun.png",
            fullName: "heavy-shotgun-legendary",
            name: "heavy-shotgun",
            type: "shotgun",
            tier: "legendary",
            tierValue: 4,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create an epic hand-cannon document in database
        Weapon.create({
            image: "/images/weapons/hand-cannon.png",
            fullName: "hand-cannon-epic",
            name: "hand-cannon",
            type: "pistol",
            tier: "epic",
            tierValue: 3,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create an legendary hand-cannon document in database
        Weapon.create({
            image: "/images/weapons/hand-cannon.png",
            fullName: "hand-cannon-legendary",
            name: "hand-cannon",
            type: "pistol",
            tier: "legendary",
            tierValue: 4,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a common pistol document in database
        Weapon.create({
            image: "/images/weapons/pistol.png",
            fullName: "pistol-common",
            name: "pistol",
            type: "pistol",
            tier: "common",
            tierValue: 0,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create an uncommon pistol document in database
        Weapon.create({
            image: "/images/weapons/pistol.png",
            fullName: "pistol-uncommon",
            name: "pistol",
            type: "pistol",
            tier: "uncommon",
            tierValue: 1,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a rare pistol document in database
        Weapon.create({
            image: "/images/weapons/pistol.png",
            fullName: "pistol-rare",
            name: "pistol",
            type: "pistol",
            tier: "rare",
            tierValue: 2,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a common revolver document in database
        Weapon.create({
            image: "/images/weapons/revolver.png",
            fullName: "revolver-common",
            name: "revolver",
            type: "pistol",
            tier: "common",
            tierValue: 0,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create an uncommon revolver document in database
        Weapon.create({
            image: "/images/weapons/revolver.png",
            fullName: "revolver-uncommon",
            name: "revolver",
            type: "pistol",
            tier: "uncommon",
            tierValue: 1,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a rare revolver document in database
        Weapon.create({
            image: "/images/weapons/revolver.png",
            fullName: "revolver-rare",
            name: "revolver",
            type: "pistol",
            tier: "rare",
            tierValue: 2,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create an epic suppressed-pistol document in database
        Weapon.create({
            image: "/images/weapons/suppressed-pistol.png",
            fullName: "suppressed-pistol-epic",
            name: "suppressed-pistol",
            type: "pistol",
            tier: "epic",
            tierValue: 3,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create an legendary suppressed-pistol document in database
        Weapon.create({
            image: "/images/weapons/suppressed-pistol.png",
            fullName: "suppressed-pistol-legendary",
            name: "suppressed-pistol",
            type: "pistol",
            tier: "legendary",
            tierValue: 4,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a common suppressed submachine-gun document in database
        Weapon.create({
            image: "/images/weapons/suppressed-submachine-gun.png",
            fullName: "suppressed-submachine-gun-common",
            name: "suppressed-submachine-gun",
            type: "submachine-gun",
            tier: "common",
            tierValue: 0,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create an uncommon suppressed submachine-gun document in database
        Weapon.create({
            image: "/images/weapons/suppressed-submachine-gun.png",
            fullName: "suppressed-submachine-gun-uncommon",
            name: "suppressed-submachine-gun",
            type: "submachine-gun",
            tier: "uncommon",
            tierValue: 1,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a rare suppressed submachine-gun document in database
        Weapon.create({
            image: "/images/weapons/suppressed-submachine-gun.png",
            fullName: "suppressed-submachine-gun-rare",
            name: "suppressed-submachine-gun",
            type: "submachine-gun",
            tier: "rare",
            tierValue: 2,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a uncommon tactical submachine-gun document in database
        Weapon.create({
            image: "/images/weapons/tactical-submachine-gun.png",
            fullName: "tactical-submachine-gun-uncommon",
            name: "tactical-submachine-gun",
            type: "submachine-gun",
            tier: "uncommon",
            tierValue: 1,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a rare tactical submachine-gun document in database
        Weapon.create({
            image: "/images/weapons/tactical-submachine-gun.png",
            fullName: "tactical-submachine-gun-rare",
            name: "tactical-submachine-gun",
            type: "submachine-gun",
            tier: "rare",
            tierValue: 2,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a epic tactical submachine-gun document in database
        Weapon.create({
            image: "/images/weapons/tactical-submachine-gun.png",
            fullName: "tactical-submachine-gun-epic",
            name: "tactical-submachine-gun",
            type: "submachine-gun",
            tier: "epic",
            tierValue: 3,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a rare bolt-action-sniper-rifle document in database
        Weapon.create({
            image: "/images/weapons/bolt-action-sniper-rifle.png",
            fullName: "bolt-action-sniper-rifle-rare",
            name: "bolt-action-sniper-rifle",
            type: "sniper-rifle",
            tier: "rare",
            tierValue: 2,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a epic bolt-action-sniper-rifle document in database
        Weapon.create({
            image: "/images/weapons/bolt-action-sniper-rifle.png",
            fullName: "bolt-action-sniper-rifle-epic",
            name: "bolt-action-sniper-rifle",
            type: "sniper-rifle",
            tier: "epic",
            tierValue: 3,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a legendary bolt-action-sniper-rifle document in database
        Weapon.create({
            image: "/images/weapons/bolt-action-sniper-rifle.png",
            fullName: "bolt-action-sniper-rifle-legendary",
            name: "bolt-action-sniper-rifle",
            type: "sniper-rifle",
            tier: "legendary",
            tierValue: 4,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a epic semi-auto-sniper-rifle document in database
        Weapon.create({
            image: "/images/weapons/semi-auto-sniper-rifle.png",
            fullName: "semi-auto-sniper-rifle-epic",
            name: "semi-auto-sniper-rifle",
            type: "sniper-rifle",
            tier: "epic",
            tierValue: 3,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a legendary semi-auto-sniper-rifle document in database
        Weapon.create({
            image: "/images/weapons/semi-auto-sniper-rifle.png",
            fullName: "semi-auto-sniper-rifle-legendary",
            name: "semi-auto-sniper-rifle",
            type: "sniper-rifle",
            tier: "legendary",
            tierValue: 4,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create an uncommon hunting-rifle document in database
        Weapon.create({
            image: "/images/weapons/hunting-rifle.png",
            fullName: "hunting-rifle-uncommon",
            name: "hunting-rifle",
            type: "sniper-rifle",
            tier: "uncommon",
            tierValue: 1,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create an rare hunting-rifle document in database
        Weapon.create({
            image: "/images/weapons/hunting-rifle.png",
            fullName: "hunting-rifle-rare",
            name: "hunting-rifle",
            type: "sniper-rifle",
            tier: "rare",
            tierValue: 2,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a rare crossbow document in database
        Weapon.create({
            image: "/images/weapons/crossbow.png",
            fullName: "crossbow-rare",
            name: "crossbow",
            type: "sniper-rifle",
            tier: "rare",
            tierValue: 2,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create an epic crossbow document in database
        Weapon.create({
            image: "/images/weapons/crossbow.png",
            fullName: "crossbow-epic",
            name: "crossbow",
            type: "sniper-rifle",
            tier: "epic",
            tierValue: 3,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a rare grenade-launcher document in database
        Weapon.create({
            image: "/images/weapons/grenade-launcher.png",
            fullName: "grenade-launcher-rare",
            name: "grenade-launcher",
            type: "launcher",
            tier: "rare",
            tierValue: 2,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a epic grenade-launcher document in database
        Weapon.create({
            image: "/images/weapons/grenade-launcher.png",
            fullName: "grenade-launcher-epic",
            name: "grenade-launcher",
            type: "launcher",
            tier: "epic",
            tierValue: 3,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a legendary grenade-launcher document in database
        Weapon.create({
            image: "/images/weapons/grenade-launcher.png",
            fullName: "grenade-launcher-legendary",
            name: "grenade-launcher",
            type: "launcher",
            tier: "legendary",
            tierValue: 4,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a epic guided-missile document in database
        Weapon.create({
            image: "/images/weapons/guided-missile.png",
            fullName: "guided-missile-epic",
            name: "guided-missile",
            type: "launcher",
            tier: "epic",
            tierValue: 3,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a legendary guided-missile document in database
        Weapon.create({
            image: "/images/weapons/guided-missile.png",
            fullName: "guided-missile-legendary",
            name: "guided-missile",
            type: "launcher",
            tier: "legendary",
            tierValue: 4,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a rare rocket-launcher document in database
        Weapon.create({
            image: "/images/weapons/rocket-launcher.png",
            fullName: "rocket-launcher-rare",
            name: "rocket-launcher",
            type: "launcher",
            tier: "rare",
            tierValue: 2,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a epic rocket-launcher document in database
        Weapon.create({
            image: "/images/weapons/rocket-launcher.png",
            fullName: "rocket-launcher-epic",
            name: "rocket-launcher",
            type: "launcher",
            tier: "epic",
            tierValue: 3,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a legendary rocket-launcher document in database
        Weapon.create({
            image: "/images/weapons/rocket-launcher.png",
            fullName: "rocket-launcher-legendary",
            name: "rocket-launcher",
            type: "launcher",
            tier: "legendary",
            tierValue: 4,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a common grenade document in database
        Weapon.create({
            image: "/images/weapons/grenade.png",
            fullName: "grenade-common",
            name: "grenade",
            type: "grenade",
            tier: "common",
            tierValue: 0,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a rare boogie-bomb document in database
        Weapon.create({
            image: "/images/weapons/boogie-bomb.png",
            fullName: "boogie-bomb-rare",
            name: "boogie-bomb",
            type: "grenade",
            tier: "rare",
            tierValue: 2,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        
        // Create a rare impulse-grenade document in database
        Weapon.create({
            image: "/images/weapons/impulse-grenade.png",
            fullName: "impulse-grenade-rare",
            name: "impulse-grenade",
            type: "grenade",
            tier: "rare",
            tierValue: 2,
            closeRange: 1,
            midrange: 1,
            longRange: 1,
            maxRange: 25000,
            damagePerSecond: 204,
            bodyDamageClose: 17,
            headDamageClose: 42.5,
            bodyDamageMid: 17,
            headDamageMid: 42.5,
            bodyDamageLong: 17,
            headDamageLong: 42.5,
            bodyDamageMax: 17,
            headDamageMax: 42.5,
            impactDamageClose: 31,
            impactDamageMid: 31,
            impactDamageLong: 31,
            impactDamageMax: 31,
            environmentalDamageClose: 25,
            environmentalDamageMid: 25,
            environmentalDamageLong: 25,
            environmentalDamageMax: 25,
            baseSpread: .15,
            sprintSpread: 1.5,
            fallingJumpingSpread: 1.25,
            adsSpread: .65,
            standingSpread: .55,
            crouchingSpread: .8,
            horizontalRecoil: 0.25,
            horizontalRecoilGamepad: 1,
            verticalRecoil: 3.15,
            verticalRecoilGamepad: .5,
            angleMax: 25,
            angleMin: -25,
            adsRecoil: .5,
            interpSpeed: 12,
            interpSpeedRecovery: 6,
            fireRate: 12,
            reloadTime: 4.5,
            magazineSize: 0,
            floorLootChance: .333,
            chestLootChance: .333,
            supplyDropLootChance: 0
          },
          function (err, small) {
            if (err) console.log(err);
            // saved!
        });     
    });
}

module.exports = seedDB;