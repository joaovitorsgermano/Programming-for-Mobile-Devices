import { Request, Response } from "express";
import { CreateSalesService } from "../../services/Sales/CreateSalesService";

class CreateSalesController {

    async handle(request: Request, response: Response) {
        const { id, productId, userId, total, desc, obs } = request.body;

        const createSalesService = new CreateSalesService();

        const Sales = await createSalesService.execute({
            id: id,
            productId: productId,
            userId: userId,
            total: total,
            desc: desc,
            obs: obs
        });

        return response.json(Sales);
    }
}

export { CreateSalesController };