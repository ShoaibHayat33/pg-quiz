import { Router } from 'express';
import * as reply from '@/routes/reply/index';

const router = Router();
router.get('/', (req, res) => {
    return reply.success(res, 201, { test: 'Working fine' });
});
export default router;
