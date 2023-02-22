import { Router } from "express"
import { UserUseController } from "../modules/users/useCases/UserUseController"

const userRouter = Router()
const userUseController = new UserUseController()

userRouter.post("/create", userUseController.handle)

export { userRouter }