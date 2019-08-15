import { model } from 'mongoose';

import Card from './Card';

const GithubCardSchema = new Card({
  repo: String,
  issue: Number,
});

export default model('GithubCard', GithubCardSchema);
