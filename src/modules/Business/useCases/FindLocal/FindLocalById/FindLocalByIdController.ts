import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindLocalByIdUseCase } from "./FindLocalByIdUseCase";

export class FindLocalByIdController {
    async handle (request: Request, response: Response): Promise<Response> {
        const { id } = request.params

        const findLocalUseCase = container.resolve(FindLocalByIdUseCase)
        const findId = await findLocalUseCase.execute(id)

        return response.json(findId)
    }
}