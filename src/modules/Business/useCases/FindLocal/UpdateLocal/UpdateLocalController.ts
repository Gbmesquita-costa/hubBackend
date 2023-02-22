import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateLocalUseCase } from "./UpdateLocalUseCase";

export class UpdateLocalController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { neighborhood, publicplace, state, locality, number } = request.body
        const { id } = request.params

        const updateLocalUseCase = container.resolve(UpdateLocalUseCase)

        const update = await updateLocalUseCase.execute({
            id: id,
            neighborhood: neighborhood,
            publicplace: publicplace,
            state: state,
            locality: locality,
            number: number
        })

        return response.json(update)
    }
}