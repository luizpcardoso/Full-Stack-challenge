import { Router } from "express";

import { transactionOperationController } from "../controllers/transactions/transactionOperations.controller";
import { transactionReadController } from "../controllers/transactions/transactionRead.controller";
import verifyAuthUserMiddleware from "../middlewares/verifyAuthUser.middleware";
import verifyTransactionFieldsMiddleware from "../middlewares/verifyTransactionFields.middleware";

const routes = Router();

export const transactionRoutes: any = () => {
  routes.post(
    "/pay",
    verifyAuthUserMiddleware,
    verifyTransactionFieldsMiddleware,
    transactionOperationController
  );
  routes.get(
    "/transactions",
    verifyAuthUserMiddleware,
    transactionReadController
  );

  return routes;
};
