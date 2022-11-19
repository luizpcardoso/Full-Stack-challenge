import { Router } from "express";
import { userCreateController } from "../controllers/users/userCreate.controller";
import { userLoginController } from "../controllers/users/userLoguin.controller";
import { userBalanceReadController } from "../controllers/users/userBalanceRead.controller";

import verifyUserCreateFieldsMiddlewere from "../middlewares/verifyUserCreateFields.middleware";
import verifyUserLoginFieldsMiddlewere from "../middlewares/verifyUserLoginFields.middleware";
import verifyAuthUserMiddleware from "../middlewares/verifyAuthUser.middleware";

const routes = Router();

export const userRoutes: any = () => {
  routes.post("/user", verifyUserCreateFieldsMiddlewere, userCreateController);
  routes.post("/login", verifyUserLoginFieldsMiddlewere, userLoginController);
  routes.get("/balance", verifyAuthUserMiddleware, userBalanceReadController);
  return routes;
};
