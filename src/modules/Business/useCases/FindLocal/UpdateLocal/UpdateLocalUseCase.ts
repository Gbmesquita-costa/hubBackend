import { inject, injectable } from "tsyringe";
import { ICreateBusinessRepository } from "../../../repositories/ICreateBusinessRepository";

interface BusinessLocalWithProps {
    id?:          string;
    neighborhood: string;
    publicplace:  string;
    state:        string;
    locality:     string;
    number:       string;
    businessId?:  string;
}

@injectable()
export class UpdateLocalUseCase {
    constructor (
        @inject("Business")
        private updateLocal: ICreateBusinessRepository
    ) {}

    async execute({ id, neighborhood, publicplace, state, locality, number }: BusinessLocalWithProps): Promise<BusinessLocalWithProps> {
        return await this.updateLocal.updateLocal({
            id: id,
            neighborhood: neighborhood,
            publicplace: publicplace,
            state: state,
            locality: locality,
            number: number,
        })
    }
}