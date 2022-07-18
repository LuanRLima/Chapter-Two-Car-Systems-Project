import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";




class ListCategoriesController {


    async handle(request: Request, Response: Response): Promise<Response> {
        const listCategoryUseCase = container.resolve(ListCategoriesUseCase);
        const all = await listCategoryUseCase.execute();
        return Response.json(all);
    }
}

export { ListCategoriesController };