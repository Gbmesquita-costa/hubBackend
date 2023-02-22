import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateBusinessRepository } from "../../infra/repositories/CreateBusinessRepository";
import { ResponsibleBusinessUseCase } from "./ResponsibleBusinessUseCase";

export class ResponsibleBusinessController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { principal_name, secondary_name, telephone } = request.body
        const { cnpj, state, locality, number }: string | any = request.query

        const findBusiness = new CreateBusinessRepository()
        const businessId = await findBusiness.findCnpj(cnpj)

        const localId = await findBusiness.findResponsibleLocal({
            state: state,
            locality: locality,
            number: number 
        })

        const responsibleUseCase = container.resolve(ResponsibleBusinessUseCase)

        const responsibleBusinessUseCase = await responsibleUseCase.execute({
            principal_name: principal_name,
            secondary_name: secondary_name,
            telephone: telephone,
            businessId: businessId.id,
            localId: localId.id
        })

        return response.json(responsibleBusinessUseCase)
    }
}