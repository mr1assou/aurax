import express from "express";
import { LoginController } from "../controllers/loginController";
import { LoginService } from "../services/loginService";
import { LoginRepo } from "../repositories/loginRepo";

const loginRouter = express.Router();
const controller = new LoginController(new LoginService(new LoginRepo()));
// endpointes of apis
loginRouter.post("/login",controller.login.bind(controller));

export default loginRouter;
