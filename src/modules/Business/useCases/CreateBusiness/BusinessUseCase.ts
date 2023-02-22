import { inject, injectable } from "tsyringe";
import { ICreateBusinessRepository } from "../../repositories/ICreateBusinessRepository";

interface BusinessWithProps {
    name:        string;
    cnpj:        string;
    description: string;
}

@injectable()
export class BusinessUseCase {
    constructor (
        @inject("Business")
        private Business: ICreateBusinessRepository
    ) {}

    async execute ({ name, cnpj, description }: BusinessWithProps): Promise<BusinessWithProps> {
        const findBusinessCnpj = await this.Business.findCnpj(cnpj)

        if (findBusinessCnpj) {
            return await this.Business.updateBusinessName({
                id: findBusinessCnpj.id,
                name: name,
                cnpj: cnpj,
                description: description
            })
        }

        return await this.Business.createBusiness({
            name: name,
            cnpj: cnpj,
            description: description
        })
    }
}