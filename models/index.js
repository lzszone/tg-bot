const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tg');
const {Schema} = mongoose;

const tokenSchema = new Schema({
  token: String,
  address: String
});

const tokenModel = mongoose.model('tokens', tokenSchema);

module.exports = {
  tokenModel
}