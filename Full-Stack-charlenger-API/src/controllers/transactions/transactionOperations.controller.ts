import { Request, Response } from "express";
import { AppError } from "../../errors/appErrors";
import transactionOperationService from "../../services/transactionOperation.service";

export const transactionOperationController = async (
  req: Request,
  res: Response
) => {
  try {
    const userFrom = req.username;
    const { username, value } = req.body;
    const userTo = username;

    const responseMessage = await transactionOperationService(
      userFrom,
      userTo,
      value
    );

    return res.status(200).send(responseMessage);
  } catch (err) {
    if (err instanceof AppError) {
      return res.send({
        error: err.name,
        message: err.message,
      });
    }
  }
};
