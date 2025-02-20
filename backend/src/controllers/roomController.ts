import { NextFunction, Request, Response } from "express";
import { RoomService } from "../services/roomService";

export class RoomController {
    private roomService: RoomService;
    constructor(roomService: RoomService) {
        this.roomService = roomService;
    }
    async addRoom(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const { description, category } = req.body;
            const value = await this.roomService.addRoom({user_id:req.user.user_id,description, category });
            return res.json({room: value });
        } catch (err) {
            next(err);  
        }
    }
    async getRooms(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            console.log(req.user.user_id);
            const value = await this.roomService.getRooms(req.user.user_id);
            return res.json({room: value });
        } catch (err) {
            next(err); 
        }
    }
    async joinRoom(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const user_id=req.user.user_id;
            const channel=req.body.channel;
            const value = await this.roomService.joinRoom(user_id,channel);
            return res.json(value);
        } catch (err) {
            next(err); 
        }
    }
}
