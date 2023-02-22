import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindResponsibleUseCase } from "./FindResponsibleUseCase"

export class FindResponsibleController {
    async handle(request: Request, response: Response): Promise<Response> {
        const findResponsibleUseCase = container.resolve(FindResponsibleUseCase)
        const responsibleFinded = await findResponsibleUseCase.execute()

        return response.json(responsibleFinded)
    }
}