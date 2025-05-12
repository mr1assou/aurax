

import { ConnectDatabase } from "../utils/dbConnection";
import { Pool } from "mysql2";
import { Post } from "../entities/post";

export class PostRepo {
    private connectionDb: Pool;
    constructor() {
        this.connectionDb = ConnectDatabase.createConnection();
    }
    async addPost(data: Post): Promise<any> {
        try {
            const {user_id,description,path_image}= data;
            const result = await this.connectionDb.promise().query(`CALL add_post(?,?,?)`, [user_id,description,path_image]);
            return {user_id,description,path_image}; 
        } catch (err) {
            return "error to add post"; 
        }
    }
    async getPosts(): Promise<any> {        
        try {
            // Use await with the query
            const result = await this.connectionDb.promise().query(`CALL get_posts()`, []);
            const posts:any=result[0];
            return posts[0]; 
        } catch (err) {
            return "error to add room"; 
        }
    }
    async addComment(data:any): Promise<any> {        
        try {
            const {post_id,user_id,comment}=data;
            // Use await with the query
            const result = await this.connectionDb.promise().query(`CALL add_comment(?,?,?)`, [user_id,post_id,comment]);
            return "good"; 
        } catch (err) {
            return "error to add room"; 
        }
    }
    async getComment(post_id:any): Promise<any> {        
        try {
            const result = await this.connectionDb.promise().query(`CALL get_comments_by_post(?)`, [post_id]);
            const comments:any=result[0];
            return comments[0]; 
        } catch (err) {
            return "error to add room"; 
        }
    }
    async sharePost(data: any): Promise<any> {
        try {
            const {user_id,description,path_image}= data;
            const result = await this.connectionDb.promise().query(`CALL add_post(?,?,?)`, [user_id,description,path_image]);
            return {user_id,description,path_image}; 
        } catch (err) {
            return "error to add post"; 
        }
    }
    async getPostSById(data: any): Promise<any> {
        try {
            const result = await this.connectionDb.promise().query(`CALL get_posts_by_id(?)`, [data]);
            const posts:any=result[0];
            return posts[0]; 
        } catch (err) {
            return "error to add post"; 
        }
    }
}