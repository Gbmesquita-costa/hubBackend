interface UserWithProps {
    id?:      string;
    name:     string;
    email:    string;
    password: string;
}

export interface ICreateUserRepository {
    createUser: ({ name, password, email }: UserWithProps) => Promise<void>;
    findUser: (email: string) => Promise<UserWithProps>
    findUserName: (name: string) => Promise<UserWithProps>
    FindUserId: (id: string) => Promise<UserWithProps>
}