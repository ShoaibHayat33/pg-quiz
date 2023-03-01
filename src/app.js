import 'dotenv/config';

import cors from 'cors';
import logger from 'morgan';
import express from 'express';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';

import * as configs from '@/config';
import * as reply from '@/routes/reply/index';

const { NODE_ENV } = process.env;

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(configs.corsConfig));
app.use(cookieParser());


configs.routerConfig(app);

app.use((req, res, next) => {
  next(createError(404));
});
app.use((err, req, res, next) => {
  reply.failed(res, err.status || 500, [err]);
});

export default app;
