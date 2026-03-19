import { Request, Response } from "express";
import { injectable, inject } from "tsyringe";
import { AuthService } from "./auth.service";

@injectable()
export class AuthController {
  constructor(
    @inject(AuthService)
    private authService: AuthService,
  ) {}

  public async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;

      const user = await this.authService.authenticate(email, password);

      res.status(200).json(user);
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  }
  async me(req: Request, res: Response) {
    // console.log("Decoded user:", req.user);
    try {
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const userId = req.user.id;

      const user = await this.authService.getCurrentUser(userId);

      return res.json(user);
    } catch (error) {
      return res.status(401).json({
        message: (error as Error).message,
      });
    }
  }
  public async register(req: Request, res: Response) {
    try {
      const { email, password, username } = req.body;

      const result = await this.authService.register(email, password, username);
      return res.status(201).json(result);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
