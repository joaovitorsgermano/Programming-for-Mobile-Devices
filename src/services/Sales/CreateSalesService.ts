interface ISalesRequest {
  id: number;
  productId: number;
  userId: number;
  total: number;
  desc: string;
  obs: string;
}

class CreateSalesService {
  async execute({ id, productId, userId, total, desc, obs }: ISalesRequest) {

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

export { CreateSalesService };