import { Request, Response } from "express";
import { container } from "tsyringe";
import { BusinessUseCase } from "./BusinessUseCase";

export class BusinessController {
    async handle (request: Request, response: Response): Promise<Response> {
        const { name, cnpj, description } = request.body
        
        const businessUseCase = container.resolve(BusinessUseCase)

        const businessCreated = await businessUseCase.execute({
            name: name,
            cnpj: cnpj,
            description: description
        })

        return response.json(businessCreated)
    }
}