import { inject, injectable } from "tsyringe";
import { ICreateBusinessRepository } from "../../../repositories/ICreateBusinessRepository";

interface ResponsibleAddress {
    id?:            string;
    neighborhood:   string;
    publicplace:    string;
    state:          string;
    locality:       string;
    number:         string;
    responsible_id: string;
}

@injectable()
export class AddressResponsibleUseCase {
    constructor (
        @inject("Business")
        private addressResponsible: ICreateBusinessRepository
    ) {}

    async execute ({ neighborhood, publicplace, state, locality, number, responsible_id }: ResponsibleAddress): Promise<ResponsibleAddress> {
        return await this.addressResponsible.createAddressResponsible({
            neighborhood: neighborhood,
            publicplace: publicplace,
            state: state,
            locality: locality,
            number: number,
            responsible_id: responsible_id
        })
    }
}