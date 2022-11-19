import { Request, Response } from "express";
import { AppError } from "../../errors/appErrors";
import userLoginService from "../../services/userLogin.service";

export const userLoginController = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const token = await userLoginService({ username, password });

    return res.status(200).json({ token });
  } catch (err) {
    if (err instanceof AppError) {
      return res.send({
        error: err.name,
        message: err.message,
      });
    }
  }
};
