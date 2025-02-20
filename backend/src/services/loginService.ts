import { LoginRepo } from "../repositories/loginRepo";
import jwt from "jsonwebtoken";


export class LoginService {
    constructor(private loginRepo: LoginRepo) {}
    async login(data: any): Promise<any> {
        const response = await this.loginRepo.login(data);
        const [user_id, email, first_name, last_name]=response.split(',');
        if (response !=0) {
            const secretKey = process.env.ACCESS_TOKEN_SECRET;
            if (!secretKey) throw new Error('ACCESS_TOKEN_SECRET not configured');
            const accessToken = jwt.sign({user_id, email, first_name, last_name}, secretKey, { expiresIn: '1h' });
            return { success: true, token: accessToken };
        }
        return { success: false, message: 'Login failed' };
    }
}