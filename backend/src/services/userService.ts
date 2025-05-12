import { User } from "../entities/user";
import { userRepo } from "../repositories/userRepo";



export class userService {
    private adminUserRepository: userRepo;
    constructor(adminUserRepository: userRepo) {
        this.adminUserRepository = adminUserRepository;
    }
    async addUser(data: User) : Promise<string>{
        const res= await this.adminUserRepository.addUser(data);
        return res;
    }
    async getUser(data: any) : Promise<string>{
        const res= await this.adminUserRepository.getUser(data);
        return res;
    }
}
