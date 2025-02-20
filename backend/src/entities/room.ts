

export class Room{
    user_id :number;
    channel: string;
    description: string;
    category: string;
    constructor(user_id:number,channel:string,description:string,category:string){
        this.user_id=user_id;
        this.channel=channel;
        this.description=description;
        this.category=category;
    }
}