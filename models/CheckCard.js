import { model } from 'mongoose';

import Card from './Card';

const CheckCardSchema = new Card({
  done: Boolean,
});

export default model('CheckCard', CheckCardSchema);
