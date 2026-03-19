import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { UserService } from "./user.service";

@injectable()
export class UserController {
  private userService = container.resolve(UserService);

  public async createUser(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password } = req.body;

      const user = await this.userService.createUser({
        name,
        email,
        password,
      });

      res.status(201).json({
        message: "User created successfully",
        user,
      });
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  }

  public async getUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.userService.getAllUsers();

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({
        message: "Server error",
      });
    }
  }
  public async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      if (!id || Array.isArray(id)) {
        res.status(400).json({ message: "Invalid id" });
        return;
      }

      const user = await this.userService.getUserById(id);

      res.status(200).json(user);
    } catch (error: any) {
      res.status(404).json({
        message: error.message || "User not found",
      });
    }
  }
}
