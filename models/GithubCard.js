import { model } from 'mongoose';

import Card from './Card';

const GithubCardSchema = new Card({
  Repo: String,
  Issue: Number,
});

export default model('GithubCard', GithubCardSchema);
