import { classToPlain } from "class-transformer";

class ListUsersService {
  async execute() {

    const usersret = [{
        "id": "1",
        "nome": "Usuario 01",
        "email": "fcd@gmail.com",
        "admin": "1",
        "password": "xxxxxx",
        "status": "Ativo"

    },
    {
        "id": "2",
        "nome": "Usuario 02",
        "email": "fcder@gmail.com",
        "admin": "0",
        "password": "xxxxxx",
        "status": "Ativo"

    } ]

    return classToPlain(usersret)
  }
}

export { ListUsersService };