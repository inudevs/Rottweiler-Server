import { Router } from 'express';

import board from './board';
// import card from './card';

const router = Router();

router.use('/board', board);
// router.use('/card', card);

export default router;
