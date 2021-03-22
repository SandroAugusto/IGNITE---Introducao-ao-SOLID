import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  validateUserExists(user_id: string):boolean{
    const userExists = this.usersRepository.findById(user_id);

    if (!userExists) {
      return false;
    }

    return true;
  }

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const user = this.usersRepository.findById(user_id);
    return this.usersRepository.turnAdmin(user);
  }
}

export { TurnUserAdminUseCase };
