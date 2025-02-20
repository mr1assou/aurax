

import { ConnectDatabase } from "../utils/dbConnection";
import { Pool } from "mysql2";
import { Room } from "../entities/room";

export class RoomRepo {
    private connectionDb: Pool;
    constructor() {
        this.connectionDb = ConnectDatabase.createConnection();
    }
    async addRoom(data: Room): Promise<any> {
        try {
            const {user_id,channel,description,category}= data;
      
            const result = await this.connectionDb.promise().query(`CALL add_room(?,?,?,?)`, [user_id,channel,description,category]);
            return {user_id,channel,description,category}; 
        } catch (err) {
            return "error to add room"; 
        }
    }
    async getRooms(data: number): Promise<any> {        
        try {
            const user_id=data;
            // Use await with the query
            const result = await this.connectionDb.promise().query(`CALL getRooms(?)`, [user_id]);
            const rooms:any=result[0];
            return rooms[0]; 
        } catch (err) {
            return "error to add room"; 
        }
    }
}