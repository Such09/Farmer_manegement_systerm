import express from 'express';
// import dotenv from 'dotenv';
import cors from 'cors'
import cookieParser from 'cookie-parser';

// dotenv.config();
const app = express();

const allowedOrigins = [
    `https://agriconnectweb-phi.vercel.app`,
    `https://farmer-manegement-systerm.netlify.app`,
]

app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }))
app.use(cookieParser())

// routers
import { router } from './src/routes/routes.js';
app.use('/farmer', router);


export { app }