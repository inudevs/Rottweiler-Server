import { Schema } from 'mongoose';

export default new Schema({
  timestamp: { type: Date, default: Date.now },
  title: String,
  content: String,
  author: String,
  board: String,
});
