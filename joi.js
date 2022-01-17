const Joi = require("joi");

const newUserValidation = Joi.object({
    name: Joi.string().trim().min(1).max(30).required(),
    password: Joi.string().min(5).required(),
    admin: Joi.boolean().required(),
    email: Joi.string().email().required()
});

const updateUserValidation = Joi.object({
    name: Joi.string().trim().min(1).max(30),
    password: Joi.string().min(5),
    admin: Joi.boolean(),
    email: Joi.string().email().required()
});

const newKanalValidation = Joi.object({
    name: Joi.string().trim().min(1).max(30).required(),
    subs: Joi.number().integer().required(),
    UserID: Joi.number().integer().required(),
});

const updateKanalValidation = Joi.object({
    name: Joi.string().trim().min(1).max(30),
    subs: Joi.number().integer(),
    UserID: Joi.number().integer()
});

const newVideoValidation = Joi.object({
    name: Joi.string().trim().min(1).max(30).required(),
    likes: Joi.number().integer().required(),
    date: Joi.date().required(),
    UserID: Joi.number().integer().required(),
});

const updateVideoValidation = Joi.object({
    name: Joi.string().trim().min(1).max(30),
    likes: Joi.number().integer(),
    date: Joi.date(),
    UserID: Joi.number().integer()
});

const newKomentarValidation = Joi.object({
    body: Joi.string().trim().min(1).max(300).required(),
    likes: Joi.number().integer().required(),
    date: Joi.date().required(),
    UserID: Joi.number().integer().required(),
});

const updateKomentarValidation = Joi.object({
    body: Joi.string().trim().min(1).max(30).max(300),
    likes: Joi.number().integer(),
    date: Joi.date(),
    UserID: Joi.number().integer()
});

module.exports = { 
    newUserValidation, 
    updateUserValidation, 
    newKanalValidation, 
    updateKanalValidation, 
    newVideoValidation,
    updateVideoValidation,
    newKomentarValidation,
    updateKomentarValidation,
};


