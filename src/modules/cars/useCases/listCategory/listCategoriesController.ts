import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";




class ListCategoriesController {
    constructor(private listCategoryUseCase: ListCategoriesUseCase) { }

    handle(request: Request, Response: Response): Response {
        const all = this.listCategoryUseCase.execute();
        return Response.json(all);
    }
}

export { ListCategoriesController };