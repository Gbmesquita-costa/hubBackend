import { inject, injectable } from "tsyringe";
import { ICreateUserRepository } from "../../repositories/ICreateUserRepository"

interface UserWithProps {
    id?:      string;
    name:     string;
    email:    string; 
    password: string;
}

@injectable()
export class GetUserUseCase {
    constructor(
        @inject("UserId")
        private user_id: ICreateUserRepository
    ) {}

    async execute(id: string): Promise<UserWithProps> {
        return await this.user_id.FindUserId(id)    
    }
}