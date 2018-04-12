var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var HealingItemSchema = new Schema(
  {
    image: {type: String, required: true},
    fullName: {type: String, required: true},
    name: {type: String, required: true},
    type: {type: String, required: true},
    tier: {type: String, required: true},
    tierValue: {type: Number, required: true},
    description: {type: String, required: true},
    timeToConsume: {type: Number, required: true},
    timeToHeal: {type: Number, required: true},
    shieldRestored: {type: Number, required: true},
    healthRestored: {type: Number, required: true},
    shieldLimit: {type: Number, required: true},
    healthLimit: {type: Number, required: true},
    quantity: {type: Number, required: true},
    floorLootChance: {type: Number, required: true},
    chestLootChance: {type: Number, required: true},
    supplyDropLootChance: {type: Number, required: true}
  }
);
//Export model
module.exports = mongoose.model('HealingItem', HealingItemSchema);