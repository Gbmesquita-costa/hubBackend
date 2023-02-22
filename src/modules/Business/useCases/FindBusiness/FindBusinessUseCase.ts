import { inject, injectable } from "tsyringe";
import { ICreateBusinessRepository } from "../../repositories/ICreateBusinessRepository";

interface BusinessWithProps {
    id?:         string;
    name:        string;
    cnpj:        string;
    description: string;
}

@injectable()
export class FindBusinessUseCase {
    constructor (
        @inject("Business")
        private businessFinded: ICreateBusinessRepository
    ) {}

    async execute(): Promise<BusinessWithProps[]> {
        return await this.businessFinded.findBusiness()
    }
}