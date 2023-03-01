import quizRouter from '@/routes/quiz';
import indexRouter from '@/routes/index';

export default function (app) {
  app.use('/api', [indexRouter, quizRouter]);
}
