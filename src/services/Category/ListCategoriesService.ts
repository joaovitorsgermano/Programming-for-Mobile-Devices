import { classToPlain } from "class-transformer";

class ListCategoriesService {
  async execute() {

    const categories = [{
      "id": "1",
      "name": "Perecível"
    },
    {
      "id": "2",
      "name": "Não-perecível"
    }]

    return classToPlain(categories)
  }
}

export { ListCategoriesService };