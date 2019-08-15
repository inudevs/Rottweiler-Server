import { Router } from 'express';

import create from './create';
import remove from './delete';

const router = Router();

router.use('/create', create);
router.use('/remove', remove);

export default router;
