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
}