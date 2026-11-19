import express from 'express';
// import dotenv from 'dotenv';
import cors from 'cors'
import cookieParser from 'cookie-parser';

// dotenv.config();
const app = express();

app.use(cors({
    // origin: process.env.FRONTEND_URL,  
    origin: `https://vercel.com/such09s-projects/agriconnect/6CpPLz23wEW17MwPTsUR8Xq3t6Uw`,  
    credentials: true
}));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }))
app.use(cookieParser())

// routers
import { router } from './src/routes/routes.js';
app.use('/farmer', router);


export { app }