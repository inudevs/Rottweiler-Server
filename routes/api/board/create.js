import { Router } from 'express';

import Board from '../../../models/Board';

const router = Router();

router.post('/', (req, res) => {
  const board = new Board();
  board.name = req.body.name;
  board.decs = req.body.decs;
  board.author = req.body.author;
  board.save((err) => {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(200);
  });
});

export default router;
