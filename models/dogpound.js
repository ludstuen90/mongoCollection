var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  dogname: String,
  dogbreed: String
});


var Dog = mongoose.model('dogcity', userSchema);

module.exports = Dog;
