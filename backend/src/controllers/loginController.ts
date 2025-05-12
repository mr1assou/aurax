import { NextFunction, Request, Response } from "express";
import { LoginService } from "../services/loginService";

export class LoginController {
    constructor(private loginService: LoginService) { }

    async login(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const data = req.body;
            const result = await this.loginService.login(data);
            if (result.success) {
                res.cookie('accessToken', result.token, {
                    httpOnly: true,
                    maxAge: 63072000000, // 2 years
                    sameSite: false,
                });
                return res.json({ success: true, message: "Login successful" });
            }
            return res.status(401).json({ success: false, message: "Login failed" });
        } catch (err) {
            next(err);
        }
    }
}