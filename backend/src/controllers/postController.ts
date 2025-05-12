import { NextFunction, Request, Response } from "express";
import { PostService } from "../services/postService";

export class PostController {
    constructor(private PostService: PostService) { }

    async addPost(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const image_name = req.file?.filename;
            const description=req.body.description;
            const user_id=req.user.user_id;
            const result = await this.PostService.addRoom({user_id,description,image_name});
            return res.status(200).json({ message: 'Post added successfully' });
        } catch (err) {
            next(err);
        }
    }
    async getPosts(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const result = await this.PostService.getPosts();
            return res.status(200).json({ data: result});
        } catch (err) {
            next(err);
        }
    }
    async addComment(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const data=req.body;
            const user_id=req.user.user_id;
            const result = await this.PostService.addComment({...data,user_id:user_id});
            return res.status(200).json({ data: req.body});
        } catch (err) {
            next(err);
        }
    }
     async getComments(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const data=req.query.post_id;
            const result = await this.PostService.getComments(data);
            return res.status(200).json({ data: result});
        } catch (err) {
            next(err);
        }
    }
     async sharePost(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const description=req.body.description;
            const path_image=req.body.path_image;
            const user_id=req.user.user_id;
            const result = await this.PostService.sharePost({user_id,description,path_image});
            return res.status(200).json({ message: 'Post added successfully' });
        } catch (err) {
            next(err);
        }
    }

    async getPostsById(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const data=req.query.user_id;
            const result = await this.PostService.getPostsById(data);
            return res.status(200).json({ data: result});
        } catch (err) {
            next(err);
        }
    }
}