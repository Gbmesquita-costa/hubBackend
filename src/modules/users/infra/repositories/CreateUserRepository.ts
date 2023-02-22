import { hash } from "bcrypt"

import { ICreateUserRepository } from "../../repositories/ICreateUserRepository";
import { prismaClient } from "../../../../database/prisma"

interface UserWithProps {
    id?:      string;
    name:     string;
    email:    string; 
    password: string;
}

export class CreateUserRepository implements ICreateUserRepository {
    constructor ( private prisma = prismaClient ) {}
    
    async createUser ({ name, password, email }: UserWithProps): Promise<void> {
        const encryptPassword = await hash(password, 10)

        await this.prisma.users.create({
            data: {
                name,
                email,
                password: encryptPassword
            }
        })
    }

    async FindUserId(id: string): Promise<UserWithProps> {
        return await this.prisma.users.findUnique({ where: { id: id } })
    }
    
    async findUser (email: string): Promise<UserWithProps> {
        return await this.prisma.users.findUnique({ where: { email: email } })
    }

    async findUserName (name: string): Promise<UserWithProps> {
        return await this.prisma.users.findUnique({ where: { name: name } })
    } 
}