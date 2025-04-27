const Joi = require('joi');
const ExpressError = require("../utils/ExpressError.js");

// Validation for listing
const listingSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().allow(''),
    image: Joi.object({
        url: Joi.string().allow(''),
        filename: Joi.string().allow('')
    }),
    price: Joi.number().required(),
    location: Joi.string().allow(''),
    country: Joi.string().allow(''),
});

// Validation for review
const reviewSchema = Joi.object({
    rating: Joi.number().min(1).max(5).required(),
    comment: Joi.string().required(),
});

const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(".");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(".");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

module.exports = { validateListing, validateReview };
