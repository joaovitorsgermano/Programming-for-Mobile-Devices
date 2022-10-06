import { hash } from "bcryptjs";

interface ICategoryRequest {
    id: string;
    name: string;
  }

  class UpdateCategoryService {
    async execute({ id, name, }: ICategoryRequest) {

      if (!id) {
        throw new Error("id obrigatorio");
      }
      if (!name) {
        throw new Error("Nome obrigatorio");
      }

      var category = {
        id: id,
        name: name,
      }

      return category;
    }
  }

  export { UpdateCategoryService };