import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.params;

    const userExists = this.turnUserAdminUseCase.validateUserExists(user_id);

    if(!userExists){
      return response.status(404).json({error: "User not exists!"});
    }

    const user = this.turnUserAdminUseCase.execute({ user_id });

    return response.status(200).json(user);
  }
}

export { TurnUserAdminController };
