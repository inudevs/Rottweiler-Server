import { model, Schema } from 'mongoose';

const NoticeCardSchema = new Schema({
  timeStamp: { type: Date, default: Date.now },
  title: String,
  content: String,
  author: String,
  board: String,
});

export default model('NoticeCard', NoticeCardSchema);
