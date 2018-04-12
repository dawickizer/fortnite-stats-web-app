var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MaterialSchema = new Schema(
  {
    image: {type: String, required: true},
    fullName: {type: String, required: true},
    name: {type: String, required: true},
    type: {type: String, required: true},
    tier: {type: String, required: true},
    tierValue: {type: Number, required: true},
    description: {type: String, required: true},
    quantity: {type: Number, required: true},
    neededToBuild: {type: Number, required: true},
    timeToBuildWall: {type: Number, required: true},
    hpWhenPlacedWall: {type: Number, required: true},
    hpWhenBuiltWall: {type: Number, required: true},
    hpPerTickWall: {type: Number, required: true},
    numTicksWall: {type: Number, required: true},
    timeToBuildFloor: {type: Number, required: true},
    hpWhenPlacedFloor: {type: Number, required: true},
    hpWhenBuiltFloor: {type: Number, required: true},
    hpPerTickFloor: {type: Number, required: true},
    numTicksFloor: {type: Number, required: true},
    timeToBuildStairs: {type: Number, required: true},
    hpWhenPlacedStairs: {type: Number, required: true},
    hpWhenBuiltStairs: {type: Number, required: true},
    hpPerTickStairs: {type: Number, required: true},
    numTicksStairs: {type: Number, required: true},
    timeToBuildRoof: {type: Number, required: true},
    hpWhenPlacedRoof: {type: Number, required: true},
    hpWhenBuiltRoof: {type: Number, required: true},
    hpPerTickRoof: {type: Number, required: true},
    numTicksRoof: {type: Number, required: true},
  }
);

//Export model
module.exports = mongoose.model('Material', MaterialSchema);