import { model } from 'mongoose';

import BaseCard from './BaseCard';

const NoticeCardSchema = BaseCard;

export default model('NoticeCard', NoticeCardSchema);
