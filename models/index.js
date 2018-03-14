const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tg');
const {Schema} = mongoose;

const userSchema = new Schema({
  token: {
    type: String,
    unique: true,
    index: 1
  },
  address: {
    type: String,
    unique: true,
    index: true
  },
  invites: {
    type: [String],
    index: true,
    default: []
  },
  account: {
    type: Number,
    index: true,
    default: 0
  },
  isActivated: {
    type: Boolean,
    default: false
  },
  telegram_id: {
    type: String,
    default: ''
  }
});

const UserModel = mongoose.model('users', userSchema);

module.exports = {
  UserModel
}