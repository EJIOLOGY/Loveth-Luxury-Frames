import { CreateUserDTO } from "./dto/createUser.dto";
import { IUser } from "./user.model";

export interface IUserRepository {
  createUser(user: CreateUserDTO): Promise<IUser>;
  getUserByEmail(email: string): Promise<IUser | null>;
  getUserById(id: string): Promise<IUser | null>;
  getAllUsers(): Promise<IUser[]>;
}
