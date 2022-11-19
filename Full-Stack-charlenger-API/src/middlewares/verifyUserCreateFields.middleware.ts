import { Request, Response, NextFunction } from "express";

const verifyUserCreateFieldsMiddlewere = async (
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
  if (username.length < 3) {
    return res
      .status(400)
      .json({ error: "username must contain three characters or more" });
  }

  const regex = /^(?=.*[A-Z])(?=.*[0-9]).{8,15}$/;

  if (!regex.test(password)) {
    return res
      .status(400)
      .json({ error: "password must be eight characters or more" });
  }

  next();
};

export default verifyUserCreateFieldsMiddlewere;
