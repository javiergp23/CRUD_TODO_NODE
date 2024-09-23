import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.js';
import tasksRoutes from './routes/tasks.routes.js';

const app = express()

app.use(morgan('dev'))
app.use(express.json());
//Reading cookies
app.use(cookieParser());

//routes
app.use("/api",authRoutes)
app.use("/api", tasksRoutes)

export default app;
