import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.headers;

    const userValidation = this.listAllUsersUseCase.validateUserToGetList(String(user_id));

    if(!userValidation){
      return response.status(400).json({error: "Not have permission to get users list!"});
    }

    const users = this.listAllUsersUseCase.execute({ user_id: String(user_id) });

    return response.status(200).json(users);
  }
}

export { ListAllUsersController };
