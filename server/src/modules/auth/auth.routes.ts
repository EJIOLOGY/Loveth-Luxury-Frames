import { Router } from "express";
import { container } from "../../config/container";
import { AuthController } from "./auth.controller";
import { authMiddleware } from "../../middleware/auth.middleware";

const router = Router();

const authController = container.resolve(AuthController);

router.post("/login", (req, res) => authController.login(req, res));
router.post("/register", (req, res) => authController.register(req, res));
router.get("/me", authMiddleware, (req, res) => authController.me(req, res));

export default router;
