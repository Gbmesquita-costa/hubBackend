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
    businessId?:  string;
    created_at?:  string;
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

export interface ICreateBusinessRepository {
    createBusiness: ({ name, cnpj, description }: BusinessWithProps) => Promise<BusinessWithProps>
    createLocalBusiness: ({ neighborhood, locality, publicplace, state, number }: BusinessLocalWithProps) => Promise<BusinessLocalWithProps>
    createResponsibleBusiness: ({ principal_name, secondary_name, telephone, businessId, localId }: BusinessResponsibleWithProps) => Promise<BusinessResponsibleWithProps>
    createAddressResponsible: ({ neighborhood, publicplace, state, locality, number, responsible_id }: ResponsibleAddress) => Promise<ResponsibleAddress>
    updateBusinessName: ({ id, name, cnpj, description }: BusinessWithProps) => Promise<BusinessWithProps>
    updateLocal: ({ id, neighborhood, publicplace, state, locality, number }: BusinessLocalWithProps) => Promise<BusinessLocalWithProps>
    updateResponsible: ({ id, principal_name, secondary_name, telephone, businessId, localId }: BusinessResponsibleWithProps) => Promise<BusinessResponsibleWithProps>
    findPrincipalName: (principal_name: string) => Promise<BusinessResponsibleWithProps>
    findCnpj: (cnpj: string) => Promise<BusinessWithProps>
    findResponsibleLocal: ({ state, locality, number }: ResponsibleLocal) => Promise<BusinessLocalWithProps>
    findBusiness: () => Promise<BusinessWithProps[]>
    findResponsible: () => Promise<BusinessResponsibleWithProps[]>
    findLocal: () => Promise<BusinessLocalWithProps[]>
    findLocalById: (id: string) => Promise<BusinessLocalWithProps>
}