import { hash } from "bcryptjs";

interface ISalesRequest {
  id: number;
  productId: number;
  userId: number;
  total: number;
  desc: string;
  obs: string;
}

class UpdateSalesService {
  async execute({ id, productId, userId, total, desc, obs }: ISalesRequest) {

    if (!id) {
      throw new Error("id obrigatorio");
    }
    if (!productId) {
      throw new Error("Nome obrigatorio");
    }
    if (!userId) {
      throw new Error("Nome obrigatorio");
    }
    if (!total) {
      throw new Error("Nome obrigatorio");
    }
    if (!desc) {
      throw new Error("Nome obrigatorio");
    }
    if (!obs) {
      throw new Error("Nome obrigatorio");
    }

    var sales = {
      id: id,
      productId: productId,
      userId: userId,
      total: total,
      desc: desc,
      obs: obs
    }

    return sales;
  }
}

export { UpdateSalesService };