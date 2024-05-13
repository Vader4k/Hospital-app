import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from './routes/auth.js'
import userRoute from './routes/user.js'
import doctorRoute from './routes/doctor.js'
import reviewRoute from './routes/review.js'

dotenv.config()

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res)=>{
    res.send("Api is working")
})

//connect to mongoDB
mongoose.set('strictQuery', false)
const connectedDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("Connected to database")

    } catch (err){
        console.log ("mongodb isnt connected")
    }
}

//middleware
app.use(express.json());
app.use(cookieParser())
app.use(cors(
    {
        credentials: true,
    }
))
app.use('/backend/v1/auth', authRoute)
app.use('/backend/v1/users', userRoute)
app.use('/backend/v1/doctors', doctorRoute)
app.use('/backend/v1/reviews', reviewRoute)


app.listen(port, ()=>{
    connectedDB()
    console.log("listening on port" + " "+ port)
})

