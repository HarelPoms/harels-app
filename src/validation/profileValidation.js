import Joi from "joi";

import validation from "./validation";

const profileSchema = Joi.object({
        name: Joi.string().min(2).max(256).required(),
        email: Joi.string().min(2).max(256).required(),
        biz: Joi.bool().required(),
        isAdmin: Joi.bool().required(),
    });
const validateProfileSchema = (userInput) =>
    validation(profileSchema, userInput);

export default validateProfileSchema;