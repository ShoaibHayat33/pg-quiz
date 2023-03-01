import { validationResult } from 'express-validator';
import * as reply from '@/routes/reply/index';

export default function (validations) {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    return reply.failed(res, 400, errors.array());
  };
}
