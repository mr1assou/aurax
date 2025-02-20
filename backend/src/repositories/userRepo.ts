import { ConnectDatabase } from "../utils/dbConnection";
import {Pool} from "mysql2";
import { User } from "../entities/user";

export class userRepo {
    private connectionDb: Pool;
    constructor() {
        this.connectionDb = ConnectDatabase.createConnection();
    }
    async addUser(data: User) : Promise<any> {
        const {email,first_name,last_name} =data;
        try {
            // Use await with the query
            const result=await this.connectionDb.promise().query(`CALL addUser(?,?,?)`, [email,first_name,last_name]);
            return "added succefully"; // Return true if no error
        } catch (err) {
            return "user already exist"; // Return false in case of an error
        }
    }
}