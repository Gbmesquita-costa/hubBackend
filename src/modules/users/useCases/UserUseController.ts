import { Request, Response } from "express";
import { container } from "tsyringe"

import { UserUseCase } from "./UserUseCase"

export class UserUseController {
    async handle (request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body
        
        const userUseCase = container.resolve(UserUseCase)

        await userUseCase.execute({
            name,
            email,
            password
        })
        
        return response.json("Usuário criado com sucesso")
    }
}