import { hash } from "bcryptjs";

interface IProductRequest {
  id: number;
  name: string;
  description: string;
  price: string;
  url: string;
}

class UpdateProductService {
  async execute({ id, name, description, price, url }: IProductRequest) {

    if (!id) {
      throw new Error("id obrigatorio");
    }
    if (!name) {
      throw new Error("Nome obrigatorio");
    }

    var product = {
      id: id,
      name: name,
      description: description,
      price: price,
      url: url
    }

    return product;
  }
}

export { UpdateProductService };