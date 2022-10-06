interface IProductRequest {
  id: number;
  name: string;
  description: string;
  price: string;
  url: string;
}

class CreateProductService {
  async execute({ id, name, description, price, url }: IProductRequest) {

    var product = {
      id,
      name,
      description,
      price,
      url
    }

    return product;
  }
}

export { CreateProductService };