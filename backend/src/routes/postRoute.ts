

import express from "express";
import { PostController } from "../controllers/postController";
import { PostService } from "../services/postService";
import { PostRepo } from "../repositories/postRepository";
import { upload } from '../utils/upload_image';

const postRouter = express.Router();
const controller = new PostController(new PostService(new PostRepo()));
// endpointes of apis
postRouter.post("/addPost",upload.single('image'),controller.addPost.bind(controller));
postRouter.get("/getPosts",controller.getPosts.bind(controller));
postRouter.post("/addComment",controller.addComment.bind(controller));
postRouter.get("/getComments",controller.getComments.bind(controller));
postRouter.post("/sharePost",controller.sharePost.bind(controller));
postRouter.get("/getPostsById",controller.getPostsById.bind(controller));

export default postRouter;
