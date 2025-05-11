import { NextFunction, Request, Response } from "express";


export class testController {
    constructor() {}
    async test(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            console.log('return');
            res.json({user_id:req.user.user_id,first_name:req.user.first_name,last_name:req.user.last_name});
        }
        catch (err) {
            next(err);
        }
    }
}