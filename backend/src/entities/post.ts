

export class Post{
    user_id :number;
    description: string;
    path_image: string;
    constructor(user_id:number,description:string,path_image:string){
        this.user_id=user_id;
        this.description=description;
        this.path_image=path_image;
    }
}