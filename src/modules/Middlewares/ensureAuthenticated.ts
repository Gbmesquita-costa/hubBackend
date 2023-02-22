import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { CreateUserRepository } from "../users/infra/repositories/CreateUserRepository";

interface UserIdProps {
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction): Promise<void> {
    const authHeader = request.headers.authorization

    if (!authHeader) {
        throw new Error("Token is missing")
    }

    const [, token] = authHeader.split(" ")

    try {
        const { sub: user_id } = verify(token, process.env.JWT_KEY) as UserIdProps

        const userTokenId = new CreateUserRepository()
        const user_token_id = await userTokenId.FindUserId(user_id)

        if (!user_token_id) {
            throw new Error("User does not exists")
        }

        request.user = {
            id: user_id
        }

        return next()

    } catch (error) {
        throw new Error(`Invalid Token => ${error.message}`)
    }
}