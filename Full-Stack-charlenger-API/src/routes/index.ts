import { Express } from "express";
import { userRoutes } from "./userRoutes";
import { transactionRoutes } from "./transactionsRoutes";

export const appRoutes = (app: Express) => {
  app.use("/api", userRoutes());
  app.use("/api", transactionRoutes());
};
