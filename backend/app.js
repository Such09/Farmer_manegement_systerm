import express from 'express';
// import dotenv from 'dotenv';
import cors from 'cors'
import cookieParser from 'cookie-parser';

// dotenv.config();
const app = express();

app.use(cors({
    // origin: process.env.FRONTEND_URL,   
    origin: `https://agriconnectweb-phi.vercel.app/`,
    origin: `https://farmer-manegement-systerm.netlify.app`,
    credentials: true
}));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }))
app.use(cookieParser())

// routers
import { router } from './src/routes/routes.js';
app.use('/farmer', router);


export { app }