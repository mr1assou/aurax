import { ConnectDatabase } from "../utils/dbConnection";
import {Pool} from "mysql2";
import { User } from "../entities/user";


export class LoginRepo{
    private connectionDb: Pool;
    constructor() {
        this.connectionDb = ConnectDatabase.createConnection();
    }
    async login(data: User) : Promise<any> {
        try {
            const {email} =data;
            // Use await with the query
            const [rows] : any=await this.connectionDb.promise().query(`SELECT getUserDetails(?)`, [email]);
            const value=rows[0][`getUserDetails('${email}')`];
            return value;
        } catch (err) {
            return "error happen";
        }
    }
}