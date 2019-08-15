import { model, Schema } from 'mongoose';

const scrypt = require('scryptsy');

const salt = 'dddd';

const hashPassword = (password) => scrypt(password, salt, 8192, 5, 1, 25).toString('hex');

const UserSchema = new Schema({
  username: String,
  password: String,
  usertype: { type: String, default: 'user' },
  admin: { type: Boolean, default: false },
  timestamp: { type: Date, default: Date.now },
  profile: { type: String, default: 'https://inudevs.github.io/assets/images/profiles/default.jpg' },
});

// statics

UserSchema.statics.create = function (username, password) {
  const user = new this({
    username,
    password: hashPassword(password),
  });
  return user.save();
};

// methods

UserSchema.methods.verify = function (password) {
  return this.password === hashPassword(password);
};

export default model('User', UserSchema);
