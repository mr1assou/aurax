import { NextFunction, Request, Response } from "express";
import { userService } from "../services/userService";


export class userController {
    private adminUserService: userService;
    constructor(adminUserService: userService) {
        this.adminUserService = adminUserService;
    }
    async addUser(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const value = await this.adminUserService.addUser(req.body);
            return res.json({ message: value });
        }
        catch (err) {
            next(err);
        }
    }
    async getUser(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const {user_id}:any=req.query;
            const value = await this.adminUserService.getUser(user_id);
            return res.json(value );
        }
        catch (err) {
            next(err);
        }
    }
}