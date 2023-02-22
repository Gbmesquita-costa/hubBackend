import { Router } from "express"

import { BusinessLocalController } from "../modules/Business/useCases/CreateBusinessLocal/BusinessLocalController"
import { BusinessController } from "../modules/Business/useCases/CreateBusiness/BusinessController"
import { ResponsibleBusinessController } from "../modules/Business/useCases/CreateBusinessResponsible/ResponsibleBusinessController"
import { AddressResponsibleController } from "../modules/Business/useCases/CreateBusinessResponsible/AddressResponsible/AddressResponsibleController"
import { FindBusinessController } from "../modules/Business/useCases/FindBusiness/FindBusinessController"
import { FindResponsibleController } from "../modules/Business/useCases/FindResponsible/FindResponsibleController"
import { FindLocalController } from "../modules/Business/useCases/FindLocal/FindLocalController"
import { FindLocalByIdController } from "../modules/Business/useCases/FindLocal/FindLocalById/FindLocalByIdController"
import { UpdateLocalController } from "../modules/Business/useCases/FindLocal/UpdateLocal/UpdateLocalController"

const businessRoutes = Router()

const createBusiness = new BusinessController()
const createLocalBusiness = new BusinessLocalController()
const createResponsibleBusiness = new ResponsibleBusinessController()
const createResponsibleAddress = new AddressResponsibleController()
const businessFinded = new FindBusinessController() 
const responsibleFinded = new FindResponsibleController() 
const localFinded = new FindLocalController()
const localByIdFinded = new FindLocalByIdController()
const updateLocalController = new UpdateLocalController()

businessRoutes.post("/business", createBusiness.handle)
businessRoutes.post("/local", createLocalBusiness.handle)
businessRoutes.post("/responsible", createResponsibleBusiness.handle)
businessRoutes.post("/address", createResponsibleAddress.handle)
businessRoutes.get("/getbusiness", businessFinded.handle)
businessRoutes.get("/getresponsible", responsibleFinded.handle)
businessRoutes.get("/getlocal", localFinded.handle)
businessRoutes.get("/getId/:id", localByIdFinded.handle)
businessRoutes.put("/updateLocal/:id", updateLocalController.handle)

export { businessRoutes }