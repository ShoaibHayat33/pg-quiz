import { body, query } from 'express-validator';

export const listQuizesRules = [
  query('page').optional().isInt().toInt(),
  query('perPage').optional().isInt().toInt(),
];

export const createQuizRules = [
  body('title').isLength({ max: 30 }).exists(),
  body('description').isLength({ max: 250 }).optional().exists(),
  body('isActive').optional().isBoolean().default(true),
  body('questions').exists().isArray(),
  body('questions.*.question', 'question field must be a string').exists().isString(),
  body('questions.*.isMandatory', 'isMandatory field must be a boolean').exists().isBoolean().toBoolean(),
  body('questions.*.answers').exists().isArray(),
  body('questions.*.answers.*.answer', 'question field must be a string').exists().isString(),
  body('questions.*.answers.*.isRightChoice', 'isRightChoice field must be a boolean').exists().isBoolean().toBoolean(),
];

export const updateQuizRules = [
  body('title').isLength({ max: 30 }).optional(),
  body('description').isLength({ max: 250 }).optional().optional(),
  body('isActive').optional().isBoolean().default(true),
  body('questions').optional().isArray(),
  body('questions.*.question', 'question field must be a string').exists().isString(),
  body('questions.*.isMandatory', 'isMandatory field must be a boolean').exists().isBoolean().toBoolean(),
  body('questions.*.answers').exists().isArray(),
  body('questions.*.answers.*.answer', 'question field must be a string').exists().isString(),
  body('questions.*.answers.*.isRightChoice', 'isRightChoice field must be a boolean').exists().isBoolean().toBoolean(),
];
