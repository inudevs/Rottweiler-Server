import { Router } from 'express';

import auth from './auth';
import board from './board';
import card from './card';

const router = Router();

router.use('/auth', auth);
router.use('/board', board);
router.use('/card', card);

export default router;
