var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MaterialEditSchema = new Schema(
  {
    image: {type: String, required: true},
    name: {type: String, required: true},
    type: {type: String, required: true},
  }
);

//Export model
module.exports = mongoose.model('MaterialEdit', MaterialEditSchema);