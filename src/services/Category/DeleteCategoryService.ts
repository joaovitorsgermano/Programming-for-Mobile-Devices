
interface ICategoryDelete {
    id: string;
}
class DeleteCategoryService {
  async execute({id}:ICategoryDelete) {
   
    var vcategory = {
      message: "Registro excluido com sucesso"
    }

    return vcategory;
      
           
  }
}

export { DeleteCategoryService };