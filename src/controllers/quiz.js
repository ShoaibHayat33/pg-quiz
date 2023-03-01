import createError from 'http-errors';
import db from '@/database';
import * as reply from '@/routes/reply/index';

export const create = async (req, res, next) => {
  try {
    const payload = { ...req.body };
    const result = await db.models.quiz
      .create(payload, {
        fields: ['title', 'description', 'questions', 'isActive', 'updatedAt', 'createdAt', 'deletedAt'],
      });

    return reply.success(res, 201, result);
  } catch (err) {
    return next(err);
  }
};

export const get = async (req, res, next) => {
  try {
    const { page = 1, perPage = 10 } = req.query;
    const offset = page * perPage - perPage;

    const result = await db.models.quiz
      .findAndCountAll({
        offset,
        limit: perPage,
        order: [['createdAt', 'DESC']],
      });

    const totalPage = Math.ceil(result.count / perPage);
    const response = {
      ...result, page, totalPage, perPage,
    };

    return reply.success(res, 200, response);
  } catch (err) {
    return next(err);
  }
};

export const getById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await db.models.quiz
      .findOne({
        where: { id },
      });
    if (!result) {
      return next(createError(404, 'There is no quiz with this id!'));
    }

    return reply.success(res, 200, result);
  } catch (err) {
    return next(err);
  }
};

// use for edit or draft
export const update = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await db.models.quiz
      .findOne({
        where: { id },
      });
    if (!result) {
      return next(createError(404, 'There is no quiz with this id!'));
    }

    const response = await db.models.quiz.update(req.body,
      {
        where: { id },
        returning: true
      });

    return reply.success(res, 200, response);
  } catch (err) {
    next(err);
  }
};
