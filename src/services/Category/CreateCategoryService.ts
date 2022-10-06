interface ICategoryRequest {
  id: number;
  name: string;
}

class CreateCategoryService {
  async execute({ id, name }: ICategoryRequest) {

    var category = {
      id: id,
      name: name,
    }

    return category;
  }
}

export { CreateCategoryService };