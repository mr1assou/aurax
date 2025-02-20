import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


// define a user type in request
declare global {
    namespace Express {
        interface Request {
            user?: any; // Adjust the type according to your payload structure
        }
    }
}


class JWTAuthMiddleware {
    static verifyToken(req: Request, res: Response, next: NextFunction) : any{
        const token = req.cookies.accessToken;
        if (!token) {
            return res.status(403).json({ message: 'No token provided, authorization denied' });
        }
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err : any, user : any) => {
            if (err) {
                return res.status(401).json({ message: 'Token is not valid' });
            }
            // i have a problem here
            req.user = user; // Attach the decoded payload to req for later use
            next();
        });
    }
}

export default JWTAuthMiddleware;
