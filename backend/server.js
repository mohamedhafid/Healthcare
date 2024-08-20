import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDb from './config/db.js';
import authRouter from './routes/authRoute.js';
import userControlRouter from './routes/userControlRoute.js';
import doctorControlRouter from './routes/doctorControlRoute.js';
import bookingRouter from './routes/bookingRoute.js';
import dotenv from 'dotenv';

dotenv.config()


const app=express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/auth',authRouter);
app.use('/user',userControlRouter);
app.use('/doctor',doctorControlRouter);
app.use('/bookings',bookingRouter);

// database connection
connectDb();


const port=process.env.PORT;

app.get('/',(req,res)=>{
    res.send("api is working");
})

app.listen(8000,()=>{
    console.log("server is running");
})