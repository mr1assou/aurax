import express from "express";
import { userController } from "../controllers/userController";
import { userRepo } from "../repositories/userRepo";
import { userService } from "../services/userService";

const userRouter = express.Router();
const controller = new userController(new userService(new userRepo()));
// endpointes of apis
userRouter.post("/addUser", controller.addUser.bind(controller));

export default userRouter;
