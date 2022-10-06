
interface IUserDelete {
    id: string;
}

class DeleteUserService {
  async execute({id}: IUserDelete) {

    const category = { message: "Registro excluído com sucesso!"}

    return category;

  }

}

export { DeleteUserService };