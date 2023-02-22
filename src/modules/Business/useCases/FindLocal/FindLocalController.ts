import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindLocalUseCase } from "./FindLocalUseCase";

export class FindLocalController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { page = 1, per_page = 10 } = request.query

        const pageStart = (Number(page) - 1) * Number(per_page) // starts with 10 pages each
        const pageEnd = pageStart + Number(per_page)

        const findLocalUseCase = container.resolve(FindLocalUseCase)
        const localFinded = await findLocalUseCase.execute()

        const total = localFinded
        const sliceValues = localFinded.slice(pageStart, pageEnd)

        return response.json({ values: sliceValues, xtotalcount: total })
    }
}