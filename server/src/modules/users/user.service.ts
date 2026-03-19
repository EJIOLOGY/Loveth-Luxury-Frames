import { injectable, inject } from "tsyringe";
import { IUserRepository } from "./IUserRepository";
import { IUser } from "./user.model";
import { CreateUserDTO } from "./dto/createUser.dto";
import bcrypt from "bcryptjs";

@injectable()
export class UserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository,
  ) {}

  async createUser(user: CreateUserDTO): Promise<IUser> {
    const existingUser = await this.userRepository.getUserByEmail(user.email);

    if (existingUser) {
      throw new Error("Email already in use");
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);

    return this.userRepository.createUser({
      ...user,
      password: hashedPassword,
    });
  }

  async getUserByEmail(email: string): Promise<IUser | null> {
    const user = await this.userRepository.getUserByEmail(email);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }

  async getUserById(id: string): Promise<IUser | null> {
    const user = await this.userRepository.getUserById(id);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }

  async getAllUsers(): Promise<IUser[]> {
    return this.userRepository.getAllUsers();
  }
}
