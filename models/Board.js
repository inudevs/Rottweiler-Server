import { model, Schema } from 'mongoose';

const BoardSchema = new Schema({
  TimeStamp: { type: Date, default: Date.now },
  Name: String,
  Desc: String,
  Author: String,
});

export default model('Board', BoardSchema);
