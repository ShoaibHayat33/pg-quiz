import { Router } from 'express';

import * as quizController from '@/controllers/quiz';
import * as quizValidations from '@/routes/validations/quiz';
import { validate } from '@/middleware';

const router = Router();

router.route('/quizes')
  .get(validate(quizValidations.listQuizesRules), quizController.get)
  .post(validate(quizValidations.createQuizRules), quizController.create);

router.route('/quizes/:id')
  .get(quizController.getById)
  .patch(validate(quizValidations.updateQuizRules), quizController.update);

export default router;
