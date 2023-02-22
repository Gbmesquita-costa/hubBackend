import { inject, injectable } from "tsyringe";
import { ICreateBusinessRepository } from "../../repositories/ICreateBusinessRepository";

interface BusinessLocalWithProps {
    neighborhood: string;
    publicplace:  string;
    state:        string;
    locality:     string;
    number:       string;
    businessId?:  string;
}

@injectable()
export class BusinessLocalUseCase {
    constructor (
        @inject("Business")
        private createLocal: ICreateBusinessRepository
    ) {}

    async execute({ neighborhood, publicplace, state, locality, number, businessId }: BusinessLocalWithProps): Promise<BusinessLocalWithProps> {
        return await this.createLocal.createLocalBusiness({
            neighborhood: neighborhood,
            publicplace: publicplace,
            state: state,
            locality: locality,
            number: number,
            businessId: businessId
        })
    }
}