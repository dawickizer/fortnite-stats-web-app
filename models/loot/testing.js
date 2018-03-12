var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TestingSchema = new Schema(
  {
    name: {type: String, required: true},
    number: {type: Number, required: true},
  }
);

//Export model
module.exports = mongoose.model('Testing', TestingSchema);