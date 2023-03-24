import Joi from "joi";

import validation from "./validation";

const editSchema = Joi.object({
        title: Joi.string().min(2).max(256).required(),
        subTitle: Joi.string().min(2).max(256).required(),
        description: Joi.string().min(2).max(1024).required(),
        address: Joi.string().min(2).max(256).required(),
        phone: Joi.string().min(9).max(14).required(),
        url: Joi.string().min(6).max(1024),
        alt: Joi.string().min(2).max(256),
    });
const validateEditSchema = (userInput) =>
    validation(editSchema, userInput);

export default validateEditSchema;
