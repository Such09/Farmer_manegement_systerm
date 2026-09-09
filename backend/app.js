import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }))

// routers
import { router } from './src/routes/routes.js';
app.use('/farmer', router);


export { app }