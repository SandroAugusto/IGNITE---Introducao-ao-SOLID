import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { name, email } = request.body;
    const userEmailAlreadyInUse = this.createUserUseCase.validateUserEmailInUse(email);

    if (!userEmailAlreadyInUse) {
      return response.status(400).json({error:"Email user already in use!"});
    }

    const user = this.createUserUseCase.execute({ name, email });

    return response.status(201).json(user);

  }
}

export { CreateUserController };
