import { inject, injectable } from "tsyringe";
import { ICreateBusinessRepository } from "../../repositories/ICreateBusinessRepository";

interface BusinessResponsibleWithProps {
    id?:                string;               
    principal_name:     string;
    secondary_name:     string;
    telephone:          string;
    businessId:         string;
    localId:            string;
}  

@injectable()
export class FindResponsibleUseCase {
    constructor (
        @inject("Business")
        private responsibleFinded: ICreateBusinessRepository
    ) {}

    async execute(): Promise<BusinessResponsibleWithProps[]> {
        return await this.responsibleFinded.findResponsible()
    }
}