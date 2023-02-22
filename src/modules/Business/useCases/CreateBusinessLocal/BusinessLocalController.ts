import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateBusinessRepository } from "../../infra/repositories/CreateBusinessRepository";
import { BusinessLocalUseCase } from "./BusinessLocalUseCase";

export class BusinessLocalController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { neighborhood, publicplace, state, locality, number } = request.body
        const { cnpj }: string | any = request.query

        const findBusinessId = new CreateBusinessRepository()
        const businessId = await findBusinessId.findCnpj(cnpj)

        const businessLocalUseCase = container.resolve(BusinessLocalUseCase)

        const localCreated = await businessLocalUseCase.execute({
            neighborhood: neighborhood,
            publicplace: publicplace,
            locality: locality,
            state: state,
            number: number,
            businessId: businessId.id
        })

        return response.json(localCreated)
    }
}