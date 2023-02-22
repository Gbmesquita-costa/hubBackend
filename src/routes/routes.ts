import { Router } from "express"

import { userRouter } from "./createUserRoutes"
import { authenticateRouter } from "./authenticateUserRoutes"
import { businessRoutes } from "./createBusinessRoutes"

const routes = Router()
const user = "/user"

routes.use(user, userRouter)
routes.use(user, authenticateRouter)
routes.use(businessRoutes)

export { routes }