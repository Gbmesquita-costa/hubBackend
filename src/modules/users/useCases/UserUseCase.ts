import { injectable, inject } from "tsyringe";
import { ICreateUserRepository } from "../repositories/ICreateUserRepository";

interface CreateUser {
    name:     string;
    email:    string;
    password: string;
}

@injectable()
export class UserUseCase {
    constructor (
        @inject("CreateUser")
        private users: ICreateUserRepository
    ) {}

    async execute ({ name, password, email }: CreateUser): Promise<void> {
        const UserAlreadyExists = await this.users.findUser(email)
        const UserNameAlreadyExists = await this.users.findUserName(name)

        if (UserAlreadyExists) {
            throw new Error("E-mail já existe")
        }

        if (UserNameAlreadyExists) {
             throw new Error("Usuário já existe")
        }
        
        await this.users.createUser({
            name: name,
            email: email,
            password: password
        })
    }
}