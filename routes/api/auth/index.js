import { Router } from 'express';
import auth from '../../../middlewares/auth';
import User from '../../../models/User';

const router = Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }, (err, user) => {
    if (err) {
      res.sendStatus(500);
    } else if (!user) {
      res.sendStatus(404);
    } else if (user.verify(password)) {
      const userID = user._id;
      res.json({
        id: userID,
        token: auth.sign(userID, user.username),
      });
    }
  });
});

router.post('/register', (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }, (err, docs) => {
    if (err) res.sendStatus(500);
    else if (!docs.length) {
      const user = new User({ username, password });
      if (user.create()) res.json({});
      else res.sendStatus(400);
    } else res.sendStatus(400);
  });
});

export default router;
