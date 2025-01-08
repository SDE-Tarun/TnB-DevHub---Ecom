const Joi = require("joi");

const productSchema = Joi.object({
  title: Joi.string().required(),
  images: Joi.array().items(Joi.string().uri()).optional(),
  price: Joi.number().positive().required(),
  category: Joi.string().optional(),
  description: Joi.string().optional(),
  stock: Joi.number().integer().min(0).optional(),
  sizes: Joi.array().items(Joi.string()).optional(),
  material: Joi.string().optional(),
  colors: Joi.array().items(Joi.string()).optional(),
  ratings: Joi.number().min(0).max(5).optional(),
  totalReviews: Joi.number().integer().min(0).optional(),
});

module.exports = productSchema;
