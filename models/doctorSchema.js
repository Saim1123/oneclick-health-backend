import mongoose from 'mongoose'
import Joi from 'joi'

const doctorSchema = new mongoose.Schema({
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
    email: {
        type: String,
        required: true,
        unique: true
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
    college: {
        type: String,
        minLength: 3,
        required: true
    },
    city: {
        type: String,
        enum: ["karachi", "Islamabad", "Abbottabad", "Faisalabad"],
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true
    }

})

export const Doctor = mongoose.model("Doctor", doctorSchema)

export function validateDoctor(doctor) {
    const schema = Joi.object({
        firstName: Joi.string().min().required(),
        lastName: Joi.string().min().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
        number: Joi.number().required(),
        college: Joi.string().required(),
        city: Joi.string().required(),
        gender: Joi.string().required()
    })

    return schema.validate(doctor)
}
