
import express from "express";
import { testController } from "../controllers/testController";
import JWTAuthMiddleware from "../utils/jwt_middelware";


const testRouter = express.Router();
const controller = new testController();
// endpointes of apis
testRouter.get("/test",controller.test.bind(controller));

export default testRouter;
