import { Request, Response } from "express";
import { container } from "tsyringe";

import { authenticateUserUseCase } from "./authenticateUserUseCase";

export class AuthenticateUserController {
    async handle (request: Request, response: Response): Promise<Response> {
        const { name, password, email } = request.body

        const authenticatedUser = container.resolve(authenticateUserUseCase)

        const userAuthenticated = await authenticatedUser.execute(name, password, email)

        return response.json(userAuthenticated)
    }
}