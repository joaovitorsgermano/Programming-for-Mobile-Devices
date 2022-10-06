import { classToPlain } from "class-transformer";

class ListProductsService {
  async execute() {

    const products = [{
      "id": "1",
      "name": "Arroz",
      "description": "Brasileiro",
      "price": "R$25",
      "url": "https://o.imgac.net/receita/arroz-brasileiro-16803.jpg"
    },
    {
      "id": "2",
      "name": "Feijão",
      "description": "Carioca",
      "price": "R$7",
      "url": "https://www.mercadaonatural.com.br/resizer/view/373/373/false/true/16254.jpg"
    }]

    return classToPlain(products)
  }
}

export { ListProductsService };