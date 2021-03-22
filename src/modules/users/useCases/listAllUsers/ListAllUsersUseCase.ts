import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  validateUserToGetList(user_id: string):boolean{
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      return false;
    }

    if(!user.admin){
      return false;
    }

    return true;
  }

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const user = this.usersRepository.findById(user_id);

    if (!user.admin) {
      throw new Error("Sem permissão!");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
