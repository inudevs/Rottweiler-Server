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

router.post('/register', (req, res) => {});

export default router;
