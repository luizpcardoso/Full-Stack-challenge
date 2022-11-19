import { Request, Response, NextFunction } from "express";

export const verifyUserLoginFieldsMiddlewere = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body;

  if (!username || !password) {
    const error = [];

    if (!username) {
      error.push("username is a required field");
    }
    if (!password) {
      error.push("password is a required field");
    }

    return res.status(400).json({ error: error });
  }

  next();
};

export default verifyUserLoginFieldsMiddlewere;
