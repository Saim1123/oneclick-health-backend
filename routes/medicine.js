import express from 'express'
import { Medicine, validateMedicine as validate } from '../models/medicineSchema.js'

export const router = express.Router()

router.get("/", async (req, res) => {
    const medicine = await Medicine.find()
    if (!medicine) res.status(404).json({ status: "fail", message: "not found!" })

    res.status(204).json({
        status: "success",
        message: "no content"
    })
})

router.post("/", async (req, res) => {
    const { error } = validate(req.body)
    if (error) res.status(400).send(error.details[0].message)

    let medicine = new Medicine({
        img: req.body,
        medicineName: req.body,
        size: req.body,
        quantity: req.body,
        price: req.body,
    })

    await medicine.save()

    res.send("posted")
})
