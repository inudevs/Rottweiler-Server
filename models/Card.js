import { model, Schema } from 'mongoose';

const NoticeCardSchema = new Schema({
  TimeStamp: { type: Date, default: Date.now },
  Title: String,
  Content: String,
  Author: String,
  Board: String,
});

export default model('NoticeCard', NoticeCardSchema);
