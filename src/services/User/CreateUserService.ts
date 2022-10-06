import { hash } from "bcryptjs";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequest) {

    const passwordHash = await hash(password, 8);
    console.log(passwordHash);

    if (!email) {
      throw new Error("Email incorrect");
    }

    var vuser = {
      name: name,
      email: email,
      admin: admin,
      password: passwordHash
    }

    return vuser;
  }
}

export { CreateUserService };