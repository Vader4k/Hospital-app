import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from './routes/auth.js'

dotenv.config()

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
    origin: true
}

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
app.use(cors(corsOptions))
app.use('/backend/v1/auth', authRoute)

app.listen(port, ()=>{
    connectedDB()
    console.log("listening on port" + " "+ port)
})

