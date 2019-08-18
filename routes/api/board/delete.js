import { Router } from 'express';

import Board from '../../../models/Board';
import Card from '../../../models/NoticeCard';

const router = Router();

router.post('/', (req, res) => {
  Board.findOneAndDelete(req.body, (err) => {
    if (err) {
      res.sendStatus(404);
    }
  });

  Card.deleteMany({ board: req.body._id }, (err) => {
    if (err) {
      res.sendStatus(404);
      return;
    }

    res.sendStatus(200);
  });
});

export default router;
