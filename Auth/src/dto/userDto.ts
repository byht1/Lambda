import Joi from "joi";

const emailRegexp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

export const userDto = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
});
