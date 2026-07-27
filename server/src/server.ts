import "reflect-metadata";
import express, { type Express } from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import "./config/container";
import { addRoutes } from "./config/routes.config";
import mongoose from "mongoose";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());

addRoutes(app);

async function bootstrap() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined in environment variables");
  }

  if (!process.env.DATABASE_NAME) {
    throw new Error("DATABASE_NAME is not defined in environment variables");
  }

  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      dbName: process.env.DATABASE_NAME,
    });
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}
bootstrap();
