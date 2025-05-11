


import { PostRepo } from "../repositories/postRepository";




export class PostService {
    private postRepository: PostRepo;
    constructor(postRepository: PostRepo) {
        this.postRepository = postRepository;
    }
    async addRoom(data: any) : Promise<string>{
        const {image_name,description,user_id}=data;
        const path_image = `assets/${image_name}`;
        this.postRepository.addPost({user_id,description,path_image});
        return "good";
    }
    async getPosts() : Promise<any>{
        return this.postRepository.getPosts();;
    }
    async addComment(data:any) : Promise<any>{
        return this.postRepository.addComment(data);
    }
    async getComments(data:any) : Promise<any>{
        return this.postRepository.getComment(data);
    }
    async sharePost(data: any) : Promise<string>{
        const {path_image,description,user_id}=data;
        this.postRepository.sharePost({user_id,description,path_image});
        return "good";
    }
}
