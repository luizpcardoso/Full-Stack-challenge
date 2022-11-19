import { AppDataSource } from "../data-source";

import { User } from "../entities/user.entity";
import { Transaction } from "../entities/transactions.entity";
import { compareDate } from "../schemas/dateCompare";

import { AppError } from "../errors/appErrors";

const transactionReadService = async (
  username: string,
  typeTransaction: any,
  date: any
) => {
  const userRepository = AppDataSource.getRepository(User);
  const transactionRepository = AppDataSource.getRepository(Transaction);

  const transactions = await transactionRepository.find();

  const users = await userRepository.find();

  const user = users.find((user) => user.username == username);

  if (!user) {
    throw new AppError(404, "user not found");
  }

  const debitTransactions = transactions.filter((transaction) => {
    return (
      transaction.debitedAccount.account_id == user.account.account_id &&
      compareDate(date, transaction.createdAt)
    );
  });

  const creditTransactions = transactions.filter((transaction) => {
    return (
      transaction.creditedAccount.account_id == user.account.account_id &&
      compareDate(date, transaction.createdAt)
    );
  });

  let response = {};

  if (typeTransaction == "cashIn") {
    response = {
      ...response,
      cashIn: creditTransactions,
    };
    return response;
  } else if (typeTransaction == "cashOut") {
    response = {
      ...response,
      cashOut: debitTransactions,
    };
    return response;
  }

  return {
    cashIn: creditTransactions,
    cashOut: debitTransactions,
  };
};

export default transactionReadService;
