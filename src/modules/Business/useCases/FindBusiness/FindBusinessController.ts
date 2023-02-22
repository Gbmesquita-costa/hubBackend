import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindBusinessUseCase } from "./FindBusinessUseCase";

export class FindBusinessController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { page = 1, per_page = 10 } = request.query

        const pageStart = (Number(page) - 1) * Number(per_page) // starts with 10 pages each
        const pageEnd = pageStart + Number(per_page)

        const findBusinessUseCase = container.resolve(FindBusinessUseCase)
        const businessFinded = await findBusinessUseCase.execute()

        const total = businessFinded
        const sliceValues = businessFinded.slice(pageStart, pageEnd)

        return response.json({ values: sliceValues, xtotalcount: total })
    }
}