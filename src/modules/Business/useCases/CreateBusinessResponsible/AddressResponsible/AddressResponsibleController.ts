import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateBusinessRepository } from "../../../infra/repositories/CreateBusinessRepository";
import { AddressResponsibleUseCase } from "./AddressResponsibleUseCase";

export class AddressResponsibleController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { neighborhood, publicplace, state, locality, number } = request.body
        const { principal_name }: string | any = request.query

        const businessResponsibleName = new CreateBusinessRepository()
        const findPrincipalName = await businessResponsibleName.findPrincipalName(principal_name)

        const responsibleUseCase = container.resolve(AddressResponsibleUseCase)

        const AddressResponsible = await responsibleUseCase.execute({
            neighborhood: neighborhood,
            publicplace: publicplace,
            state: state,
            locality: locality,
            number: number,
            responsible_id: findPrincipalName.id
        })

        return response.json(AddressResponsible)
    }
}