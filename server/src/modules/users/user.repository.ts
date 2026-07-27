import { injectable } from "tsyringe";
import { IUserRepository } from "./IUserRepository";
import { IUser, User, UserDocument } from "./user.model";
import { CreateUserDTO } from "./dto/createUser.dto";

@injectable()
export class UserRepository implements IUserRepository {
  async createUser(user: CreateUserDTO): Promise<UserDocument> {
    const createdUser = new User(user);
    return createdUser.save();
  }

  async getUserByEmail(email: string): Promise<UserDocument | null> {
    return User.findOne({ email });
  }

  async getUserById(id: string): Promise<UserDocument | null> {
    return User.findById(id);
  }

  async getAllUsers(): Promise<UserDocument[]> {
    return User.find();
  }
}
