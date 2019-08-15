import { Router } from 'express';

import Board from '../../../models/Board';
import Card from '../../../models/Card';

const router = Router();

router.post('/', (req, res) => {
  Board.findOneAndDelete(req.body, (err) => {
    if (err) {
      res.sendStatus(404);
    }
  });

  Card.deleteMany({ boardId: req.body._id }, (err) => {
    if (err) {
      res.sendStatus(404);
      return;
    }

    res.sendStatus(200);
  });
});

export default router;
