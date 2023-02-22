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
export class ResponsibleBusinessUseCase {
    constructor (
        @inject("Business")
        private createResponsible: ICreateBusinessRepository
    ) {}

    async execute({ principal_name, secondary_name, telephone, businessId, localId }: BusinessResponsibleWithProps): Promise<BusinessResponsibleWithProps> {
        const findName = await this.createResponsible.findPrincipalName(principal_name)

        if (findName) {
            return await this.createResponsible.updateResponsible({
                id: findName.id,
                principal_name: principal_name,
                secondary_name: secondary_name,
                telephone: telephone,
                businessId: businessId,
                localId: localId
            })
        }

        return await this.createResponsible.createResponsibleBusiness({
            principal_name: principal_name,
            secondary_name: secondary_name,
            telephone: telephone,
            businessId: businessId,
            localId: localId
        })
    }
}