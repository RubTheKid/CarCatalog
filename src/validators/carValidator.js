const Joi = require('joi');

const carSchema = Joi.object({
  year: Joi.number().required(),
  model: Joi.string().required(),
  brand: Joi.string().required(),
  version: Joi.string().required(),
});

module.exports = carSchema;