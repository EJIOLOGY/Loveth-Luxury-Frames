import { Application } from "express";
import authRouter from "../modules/auth/auth.routes";
import router from "../modules/users/user.routes";

export function addRoutes(app: Application): Application {
  // Add your routes here
  // app.use("/users", container.get("userRoutes"));
  app.use("/api/auth", authRouter);
  app.use("/api/users", router);
  app.get("/", (req, res) => {
    res.send("API Running");
  });
  return app;
}
