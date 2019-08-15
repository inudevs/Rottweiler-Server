import { model, Schema } from 'mongoose';

const BoardSchema = new Schema({
  timestamp: { type: Date, default: Date.now },
  name: String,
  desc: String,
  author: String,
});

export default model('Board', BoardSchema);
