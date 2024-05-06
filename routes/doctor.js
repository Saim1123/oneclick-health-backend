import express from 'express'
import { Doctor } from '../models/doctorSchema.js'

export const router = express.Router()

router.get("/", async (req, res) => {
    const doctors = await Doctor.find()
    if (!doctors) res.status(404).json({ status: "fail", message: "not found!" })

    res.status(204).json({
        status: "success",
        message: "no content"
    })
})