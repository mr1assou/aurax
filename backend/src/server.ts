import express, { Express, Request, Response } from 'express';
import userRouter from './routes/userRoute';
import loginRouter from './routes/loginRoute';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import testRouter from './routes/test';
import cors from 'cors';
import JWTAuthMiddleware from './utils/jwt_middelware';
import roomRouter from './routes/roomRoute';

dotenv.config();

const app: Express = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    credentials: true, 
    origin: 'http://localhost',  // React app URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));


app.get('/', (req: Request, res: Response) => {
    res.send('this is music app');
});

app.use(userRouter);
app.use(loginRouter);
// all routes below middelware we check authorization
app.use(JWTAuthMiddleware.verifyToken);
app.use(roomRouter);
app.use(testRouter);

app.listen(3001,'0.0.0.0');







