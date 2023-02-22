import { Router } from "express"

import { ensureAuthenticated } from "../modules/Middlewares/ensureAuthenticated"
import { AuthenticateUserController } from "../modules/users/authenticateUser/authenticateUserController"
import { GetUserController } from "../modules/users/useCases/getUser/getUserController"

const authenticateRouter = Router()

const authenticateController = new AuthenticateUserController()
const getUserController = new GetUserController()

authenticateRouter.post("/authenticate", authenticateController.handle)
authenticateRouter.get("/user_id", ensureAuthenticated, getUserController.handle)

export { authenticateRouter }