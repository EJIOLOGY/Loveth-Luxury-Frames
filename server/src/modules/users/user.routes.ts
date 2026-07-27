import { Router } from "express";
import { UserController } from "./user.controller";
import { container } from "tsyringe";
import { authMiddleware } from "../../middleware/auth.middleware";

const router = Router();

const userController = container.resolve(UserController);

// Create User
router.post("/", userController.createUser.bind(userController));

// Apply middleware to all routes below
router.use(authMiddleware);

// Get all users
router.get("/", userController.getUsers.bind(userController));

// Get user by ID
router.get("/:id", userController.getUserById.bind(userController));

export default router;
