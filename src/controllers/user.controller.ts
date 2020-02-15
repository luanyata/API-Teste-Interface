import { Request, Response } from "express";
import { User, ListUser } from "../models/user";
import { UserService } from "../services/user.service";

export class UserController {
  private userService = new UserService();

  public users(req: Request, res: Response) {
    const users: ListUser[] = this.userService.getAll();
    res.json(users).status(200);
  }

  public user(req: Request, res: Response) {
    const user: User = this.userService.get(Number(req.params["id"]));
    res.json(user).status(200);
  }

  public deleteUser(req: Request, res: Response) {
    const isDeleted = this.userService.delete(Number(req.params["id"]));
    req.params["id"]
      ? res.json(isDeleted).status(200)
      : res.json(isDeleted).status(404);
  }

  public saveOrUpdate(req: Request, res: Response) {
    const userReq = req.body;
    const user = this.userService.save(userReq);
    res.json(user).status(200);
  }
}
