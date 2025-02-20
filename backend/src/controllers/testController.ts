import { NextFunction, Request, Response } from "express";


export class testController {
    constructor() {}
    async test(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            res.json({user_id:req.user.user_id});
        }
        catch (err) {
            next(err);
        }
    }
}