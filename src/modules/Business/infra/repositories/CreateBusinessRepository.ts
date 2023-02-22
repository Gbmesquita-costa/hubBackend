import { prismaClient } from "../../../../database/prisma";
import { ICreateBusinessRepository } from "../../repositories/ICreateBusinessRepository";

interface BusinessWithProps {
    id?:         string;
    name:        string;
    cnpj:        string;
    description: string;
}

interface BusinessLocalWithProps {
    id?:          string;
    neighborhood: string;
    publicplace:  string;
    state:        string;
    locality:     string;
    number:       string;
    businessId:   string;
}

interface BusinessResponsibleWithProps {
  id?:                string;               
  principal_name:     string;
  secondary_name:     string;
  telephone:          string;
  businessId:         string;
  localId:            string;
}

interface ResponsibleLocal {
    state:     string; 
    locality:  string; 
    number:    string;
}

interface ResponsibleAddress {
    id?:            string;
    neighborhood:   string;
    publicplace:    string;
    state:          string;
    locality:       string;
    number:         string;
    responsible_id: string;
}

export class CreateBusinessRepository implements ICreateBusinessRepository {
    constructor ( private prisma = prismaClient ) {}

    async createBusiness ({ name, cnpj, description }: BusinessWithProps): Promise<BusinessWithProps> {
        return await this.prisma.business.create({
            data: {
                name: name,
                cnpj: cnpj,
                description: description
            }
        })
    }

    async updateBusinessName({ id, name, cnpj, description }: BusinessWithProps): Promise<BusinessWithProps> {
        return await this.prisma.business.update({
            data: {
                name: name,
                cnpj: cnpj,
                description: description
            },
            where: {
                id: id
            }
        })
    }

    async createLocalBusiness ({ neighborhood, publicplace, state, locality, number, businessId }: BusinessLocalWithProps): Promise<BusinessLocalWithProps> {
        return await this.prisma.local.create({
            data: {
                neighborhood: neighborhood,
                publicplace: publicplace,
                state: state,
                locality: locality,
                number: number,
                businessId: businessId
            }
        })
    }

    async updateLocal({ id, neighborhood, publicplace, state, locality, number }: BusinessLocalWithProps): Promise<BusinessLocalWithProps> {
        return await this.prisma.local.update({
             where: { id: id },
             data: {
                neighborhood: neighborhood,
                publicplace: publicplace,
                state: state,
                locality: locality,
                number: number
            } 
        })
    }

    async createResponsibleBusiness ({ principal_name, secondary_name, telephone, businessId, localId }: BusinessResponsibleWithProps): Promise<BusinessResponsibleWithProps> {
        return await this.prisma.responsible.create({
            data: {
                principal_name: principal_name,
                secondary_name: secondary_name,
                telephone: telephone,
                businessId: businessId,
                localId: localId,
            }
        })
    }

    async updateResponsible({ id, principal_name, secondary_name, telephone, businessId, localId }: BusinessResponsibleWithProps): Promise<BusinessResponsibleWithProps> {
        return await this.prisma.responsible.update({
            data: {
                principal_name: principal_name,
                secondary_name: secondary_name,
                telephone: telephone,
                businessId: businessId,
                localId: localId
            },
            where: {
                id: id
            }
        })
    }

    async createAddressResponsible ({ neighborhood, publicplace, state, locality, number, responsible_id }: ResponsibleAddress): Promise<ResponsibleAddress> {
        return await this.prisma.address.create({
            data: {
                neighborhood: neighborhood,
                publicplace: publicplace,
                state: state,
                locality: locality,
                number: number,
                responsible_id: responsible_id
            }
        })
    }

    async findPrincipalName(principal_name: string): Promise<BusinessResponsibleWithProps> {
        return await this.prisma.responsible.findFirst({ where: { principal_name: principal_name } })
    }

    async findCnpj (cnpj: string): Promise<BusinessWithProps> {
        return await this.prisma.business.findFirst({ where: { cnpj: cnpj } })
    }

    async findResponsibleLocal ({ state, locality, number }: ResponsibleLocal): Promise<BusinessLocalWithProps> {
        return await this.prisma.local.findFirst({ where: { state: state, locality: locality, number: number } })
    }

    async findBusiness(): Promise<BusinessWithProps[]> {
        return await this.prisma.business.findMany({})
    }

    async findLocal(): Promise<BusinessLocalWithProps[]> {
        return await this.prisma.local.findMany({})
    }

    async findResponsible(): Promise<BusinessResponsibleWithProps[]> {
        return await this.prisma.responsible.findMany({})
    }

    async findLocalById(id: string): Promise<BusinessLocalWithProps> {
        return await this.prisma.local.findUnique({ where: { id: id } })
    }
}