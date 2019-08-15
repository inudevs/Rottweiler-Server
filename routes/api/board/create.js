import { Router } from 'express';

import Board from '../../../models/Board';

const router = Router();

router.post('/', (req, res) => {
  const board = new Board();
  board.Name = req.body.name;
  board.Decs = req.body.decs;
  board.Author = req.body.author;
  board.save((err) => {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(200);
  });
});

export default router;
