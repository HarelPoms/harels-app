import Joi from "joi";

import validation from "./validation";

const registerSchema = Joi.object({
    title: Joi.string().min(2).max(100).required(),
    price: Joi.number(),
    descr: Joi.string().min(2).max(100).required(),
});

const validateEditSchema = (userInput) =>
    validation(registerSchema, userInput);

export default validateEditSchema;
