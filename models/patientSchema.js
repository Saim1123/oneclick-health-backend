import mongoose from 'mongoose'
import Joi from 'joi'

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minLength: 3,
        required: true
    },
    lastName: {
        type: String,
        minLength: 3,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
    number: {
        type: Number,
        required: true,
    },
})

export const User = mongoose.model("User", userSchema)

export function validateUser(user) {
    const schema = Joi.object({
        firstName: Joi.string().min(3).required(),
        lastName: Joi.string().min(3).required(),
        password: Joi.string().min(8).required(),
        number: Joi.number().required(),
    })

    return schema.validate(user)
}
