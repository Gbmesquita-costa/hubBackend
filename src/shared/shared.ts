import { container } from "tsyringe"

import { CreateUserRepository } from "../modules/users/infra/repositories/CreateUserRepository"
import { ICreateUserRepository } from "../modules/users/repositories/ICreateUserRepository"

import { CreateBusinessRepository } from "../modules/Business/infra/repositories/CreateBusinessRepository"
import { ICreateBusinessRepository } from "../modules/Business/repositories/ICreateBusinessRepository"

container.registerSingleton<ICreateUserRepository>(
    "CreateUser",
    CreateUserRepository
)

container.registerSingleton<ICreateUserRepository>(
    "Authenticate",
    CreateUserRepository
)

container.registerSingleton<ICreateUserRepository>(
    "UserId",
    CreateUserRepository
)

container.registerSingleton<ICreateBusinessRepository>(
    "Business",
    CreateBusinessRepository
)