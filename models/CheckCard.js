import { model } from 'mongoose';

import Card from './Card';

const CheckCardSchema = new Card({
  Done: Boolean,
});

export default model('CheckCard', CheckCardSchema);
