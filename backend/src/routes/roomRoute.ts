

import express from "express";
import { RoomController } from "../controllers/roomController";
import { RoomService } from "../services/roomService";
import { RoomRepo } from "../repositories/roomRepository";

const roomRouter = express.Router();
const controller = new RoomController(new RoomService(new RoomRepo()));
// endpointes of apis
roomRouter.post("/addRoom",controller.addRoom.bind(controller));
roomRouter.get("/getRooms",controller.getRooms.bind(controller));
roomRouter.post("/joinRoom",controller.joinRoom.bind(controller));

export default roomRouter;
