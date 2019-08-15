import { Router } from 'express';

import Card from '../../../models/Board';

const router = Router();

router.post('/', (req, res) => {
  Card.findOneAndDelete(req.body, (err) => {
    if (err) {
      res.sendStatus(404);
      return;
    }

    res.sendStatus(200);
  });
});

export default router;
