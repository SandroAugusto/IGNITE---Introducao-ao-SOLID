import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    let user = new User();

    user = { ...user, name, email, created_at: new Date(), updated_at: new Date() }

    this.users.push(user)

    return user;
  }

  findById(id: string): User | undefined {
    // Complete aqui
    return this.users.find(u => u.id === id);
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
    return this.users.find(u => u.email === email);
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
    const user = this.users.find(u => u.id === receivedUser.id);

    user.admin = true;

    return user;
  }

  list(): User[] {
    // Complete aqui
    return this.users;
  }
}

export { UsersRepository };
