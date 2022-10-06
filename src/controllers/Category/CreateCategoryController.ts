import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/Category/CreateCategoryService";

class CreateCategoryController {

    async handle(request: Request, response: Response) {
        const { id, name } = request.body;

        const createCategoryService = new CreateCategoryService();

        const category = await createCategoryService.execute({
            id,
            name
        });

        return response.json(category);
    }
}

export { CreateCategoryController };