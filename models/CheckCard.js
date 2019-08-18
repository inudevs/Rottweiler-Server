import { model } from 'mongoose';

import BaseCard from './BaseCard';

const CheckCardSchema = BaseCard;
CheckCardSchema.add({
  done: Boolean,
});

export default model('CheckCard', CheckCardSchema);
