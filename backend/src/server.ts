import express, { Express, Request, Response } from 'express';
import userRouter from './routes/userRoute';
import loginRouter from './routes/loginRoute';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import testRouter from './routes/test';
import cors from 'cors';
import JWTAuthMiddleware from './utils/jwt_middelware';
import roomRouter from './routes/roomRoute';
import postRouter from './routes/postRoute';
import path from 'path';

dotenv.config();

const app: Express = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    credentials: true, 
    // origin: ['https://aurax.ma','http://localhost:5173'],  // React app URL
    origin:"*",
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'], // Add required headers
}));
app.use('/assets', express.static(path.join(process.cwd(), 'assets')));


app.get('/', (req: Request, res: Response) => {
    res.send('this is music app');
});

app.use(userRouter);
app.use(loginRouter);
// middleware for routes
app.use(JWTAuthMiddleware.verifyToken);
app.use(roomRouter);
app.use(postRouter);
app.use(testRouter);

app.listen(3001,'0.0.0.0');







