import { injectable, inject } from "tsyringe";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { IUserRepository } from "../users/IUserRepository";
import { AuthResponseDTO } from "./dto/authResponse.dto";
import { mapUser } from "../../utils/mapUser";

@injectable()
export class AuthService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository,
  ) {}

  async authenticate(
    email: string,
    password: string,
  ): Promise<AuthResponseDTO> {
    const user = await this.userRepository.getUserByEmail(email);

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
    });

    const { password: _, ...safeUser } = user.toObject();

    return {
      token,
      user: safeUser,
    };
  }
  async getCurrentUser(id: string) {
    const user = await this.userRepository.getUserById(id);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }
  async register(
    email: string,
    password: string,
    username: string,
  ): Promise<AuthResponseDTO> {
    const existingUser = await this.userRepository.getUserByEmail(email);
    if (existingUser) {
      throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userRepository.createUser({
      username,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign(
      {
        id: user._id.toString(),
      },
      process.env.JWT_SECRET! as string,
      { expiresIn: "1d" },
    );
    return {
      token,
      user: mapUser(user),
    };
  }
}
