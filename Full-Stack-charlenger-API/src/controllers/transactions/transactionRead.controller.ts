import { Request, Response } from "express";
import { AppError } from "../../errors/appErrors";
import transactionReadService from "../../services/transactionRead.service";

export const transactionReadController = async (
  req: Request,
  res: Response
) => {
  try {
    const username = req.username;
    const typeTransaction = req.query.type;
    const date = req.query.date;

    const response = await transactionReadService(
      username,
      typeTransaction,
      date
    );

    return res.status(200).send(response);
  } catch (err) {
    if (err instanceof AppError) {
      return res.send({
        error: err.name,
        message: err.message,
      });
    }
  }
};
