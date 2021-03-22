import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.params;

    const userExists = this.showUserProfileUseCase.validateUserExists(user_id);

    if(!userExists){
      return response.status(404).json({error: "User not exists!"});
    }

    const user = this.showUserProfileUseCase.execute({ user_id });

    return response.status(200).json(user);
  }
}

export { ShowUserProfileController };
