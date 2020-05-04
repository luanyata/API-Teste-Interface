import { Request, Response, Application } from "express";
import { UserController } from "../controllers/user.controller";

export class UserRouter {
  private userCtrl = new UserController();

  public router(app: Application): void {
    app
      .route("/users")
      .get((req: Request, res: Response) => this.userCtrl.users(req, res))
      .post((req: Request, res: Response) => this.userCtrl.saveOrUpdate(req, res));

    app
      .route("/users/:id")
      .get((req: Request, res: Response) => this.userCtrl.user(req, res))
      .put((req: Request, res: Response) => this.userCtrl.saveOrUpdate(req, res))
      .delete((req: Request, res: Response) => this.userCtrl.deleteUser(req, res)
      );
  }
}
