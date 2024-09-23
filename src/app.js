import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.js';

const app = express()

app.use(morgan('dev'))
app.use(express.json());
app.use("/api",authRoutes)
app.use(cookieParser());

export default app;
