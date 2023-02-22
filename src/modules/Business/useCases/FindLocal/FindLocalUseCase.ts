import { inject, injectable } from "tsyringe";
import { ICreateBusinessRepository } from "../../repositories/ICreateBusinessRepository"

interface BusinessLocalWithProps {
    id?:          string;
    neighborhood: string;
    publicplace:  string;
    state:        string;
    locality:     string;
    number:       string;
    businessId?:   string;
}

@injectable()
export class FindLocalUseCase {
    constructor (
        @inject("Business")
        private findBusinessLocal: ICreateBusinessRepository
    ) {}

    async execute(): Promise<BusinessLocalWithProps[]> {
        return await this.findBusinessLocal.findLocal()
    }
}