import { sign } from "jsonwebtoken"
import { compare } from "bcrypt"

import { ICreateUserRepository } from "../repositories/ICreateUserRepository";
import { inject, injectable } from "tsyringe";

interface UserAuthenticated {
    tokenSign: string;
    user: {
        name:  string;
        email: string;
    }
}

@injectable()
export class authenticateUserUseCase {
    constructor (
        @inject("Authenticate")
        private userAuthenticated: ICreateUserRepository
    ) {}

    async execute (name: string, password: string, email: string): Promise<UserAuthenticated> {
        const userExists = await this.userAuthenticated.findUser(email)
        const userNameExists = await this.userAuthenticated.findUserName(name)

        if (!userExists) {
            throw new Error("Usuário, e-mail ou senha inválidos")
        }

        if (!userNameExists) {
            throw new Error("Usuário, e-mail ou senha inválidos")
        }

        const passwrodVerified = await compare(password, userExists.password)

        if (!passwrodVerified) {
            throw new Error("Usuário, e-mail ou senha inválidos")
        }

        const tokenSign = sign({}, process.env.JWT_KEY, {
            subject: userExists.id, 
            expiresIn: "1d" // expires in 1 day
        })

        const token: UserAuthenticated = {
            tokenSign,
            user: {
                name: userExists.name,
                email: userExists.email
            }
        }

        return token
    }
}