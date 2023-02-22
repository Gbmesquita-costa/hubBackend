import { inject, injectable } from "tsyringe";

import { ICreateBusinessRepository } from "../../../repositories/ICreateBusinessRepository"

interface BusinessLocalWithProps {
    id?:          string;
    neighborhood: string;
    publicplace:  string;
    state:        string;
    locality:     string;
    number:       string;
    businessId:   string;
}

@injectable()
export class FindLocalByIdUseCase {
    constructor (
        @inject("Business")
        private findId: ICreateBusinessRepository
    ) {}

    async execute (id: string): Promise<BusinessLocalWithProps> {
        return await this.findId.findLocalById(id)
    }
}