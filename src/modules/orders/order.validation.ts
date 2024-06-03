import Joi from "joi";


export const orderValidation = Joi.object({
    email: Joi.string().email().required().trim(),
    roductId: Joi.string().required().trim(),
    price: Joi.number().required(),
    quantity:Joi.number().required()
})
