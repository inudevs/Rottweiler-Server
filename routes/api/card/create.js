import { Router } from 'express';

import Board from '../../../models/Board';
import NoticeCard from '../../../models/Card';
import CheckCard from '../../../models/CheckCard';
import GithubCard from '../../../models/GithubCard';

const router = Router();

router.post('/', async (req, res) => {
  const board = await Board.findById(req.body.board);
  if (!board) {
    res.sendStatus(404);
    return;
  }

  let card;

  if (req.body.type === 0) {
    card = new NoticeCard();
  } else if (req.body.type === 1) {
    card = new CheckCard();
    card.Done = req.body.done;
  } else if (req.body.type === 2) {
    card = new GithubCard();
    card.Repo = req.body.repo;
    card.Issue = req.body.issue;
  }

  card.Title = req.body.title;
  card.Content = req.body.content;
  card.Author = req.body.author;
  card.Board = req.body.board;

  card.save((err) => {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(200);
  });
});

export default router;
