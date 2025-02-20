

export class User{
    email: string;
    first_name: string;
    last_name: string;
    constructor(email:string,firstName:string,lastName:string){
        this.email=email;
        this.first_name=firstName;
        this.last_name=lastName;
    }
}