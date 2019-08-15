import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
  username: String,
  password: String,
  usertype: { type: String, default: 'user' },
  admin: { type: Boolean, default: false },
  timestamp: { type: Date, default: Date.now },
  profile: { type: String, default: 'https://inudevs.github.io/assets/images/profiles/default.jpg' },
});

export default model('User', UserSchema);
