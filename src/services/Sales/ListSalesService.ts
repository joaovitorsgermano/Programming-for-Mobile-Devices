import { classToPlain } from "class-transformer";

class ListSalesService {
  async execute() {

    const sales = [{
      "id": "1",
      "name": "Perecível"
    },
    {
      "id": "2",
      "name": "Não-perecível"
    }]

    return classToPlain(sales)
  }
}

export { ListSalesService };