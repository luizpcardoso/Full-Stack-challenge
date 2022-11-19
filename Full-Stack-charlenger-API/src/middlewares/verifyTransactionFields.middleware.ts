import { Request, Response, NextFunction } from "express";

const verifyTransactionFieldsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, value } = req.body;

  if (!username || !value) {
    const error = [];

    if (!username) {
      error.push("username is a required field");
    }
    if (!value) {
      error.push("value is a required field");
    }

    return res.status(400).json({ error: error });
  }

  next();
};

export default verifyTransactionFieldsMiddleware;
