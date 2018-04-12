var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MiscellaneousItemSchema = new Schema(
  {
    image: {type: String, required: true},
    fullName: {type: String, required: true},
    name: {type: String, required: true},
    type: {type: String, required: true},
    tier: {type: String, required: true},
    tierValue: {type: Number, required: true},
    description: {type: String, required: true},
  }
);
//Export model
module.exports = mongoose.model('MiscellaneousItem', MiscellaneousItemSchema);