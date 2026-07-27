import { container } from "tsyringe";
import { IUserRepository } from "../modules/users/IUserRepository";
import { UserRepository } from "../modules/users/user.repository";
import { UserService } from "../modules/users/user.service";
import { UserController } from "../modules/users/user.controller";

import { AuthService } from "../modules/auth/auth.service";
import { AuthController } from "../modules/auth/auth.controller";

// Repository
container.register<IUserRepository>("UserRepository", {
  useClass: UserRepository,
});

// Users
container.registerSingleton(UserRepository, UserRepository);
container.registerSingleton(UserService, UserService);
container.registerSingleton(UserController, UserController);

// Auth
container.registerSingleton(AuthService, AuthService);
container.registerSingleton(AuthController, AuthController);

export { container };
