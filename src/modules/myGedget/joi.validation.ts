import Joi from "joi"


export const joiValidation = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required().trim().max(20),
    price: Joi.number().required().max(2000),
    category: Joi.string().required().trim(),
    description: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(),
    variants: Joi.array().items(Joi.object()).required(),
    inventory: Joi.object().required()
})

 
