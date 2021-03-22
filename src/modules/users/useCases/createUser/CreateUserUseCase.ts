import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  validateUserEmailInUse(email: string):boolean{
    const userEmailAlreadyExists = this.usersRepository.findByEmail(email);

    if (userEmailAlreadyExists) {
      return false;
    }

    return true;
  }

  execute({ email, name }: IRequest): User {
    // Complete aqui
    const userEmailAlreadyExists = this.usersRepository.findByEmail(email);

    if (userEmailAlreadyExists) {
      throw new Error("User Email Already exists!");
    }

    return this.usersRepository.create({ email, name });

  }
}

export { CreateUserUseCase };
