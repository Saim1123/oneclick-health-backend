import express from 'express'
import { User, validateUser as validate } from '../models/patientSchema.js'

export const router = express.Router()

router.get("/", async (req, res) => {
    const doctors = await User.find()
    if (!doctors) res.status(404).json({ status: "fail", message: "not found!" })

    res.status(204).json({
        status: "success",
        message: "no content"
    })
})

router.post("/", async (req, res) => {
    const { error } = validate(req.body)
    if (error) res.status(400).send(error.details[0].message)

    let user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        number: req.body.number,
    })

    await user.save()

    res.send("posted")
})