import { model } from 'mongoose';

import BaseCard from './BaseCard';

const GithubCardSchema = BaseCard;
GithubCardSchema.add({
  repo: String,
  issue: Number,
});

export default model('GithubCard', GithubCardSchema);
