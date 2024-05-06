import express from 'express'
import mongoose from 'mongoose'
import { router as doctorRoutes } from "./routes/doctor.js"
import { router as userRoutes } from "./routes/patient.js"
import { router as medicineRoutes } from "./routes/patient.js"
const app = express()

app.use(express.json())

app.use("/api/doctors/register", doctorRoutes)
app.use("/api/users/register", userRoutes)
app.use("/api/store", medicineRoutes)

mongoose
    .connect("mongodb://localhost:27017/hospital")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err.message))

app.get("/", (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Home Page'
    })
})

const port = 5000
app.listen(port, () => console.log(`Server is listening on port ${port}...`))