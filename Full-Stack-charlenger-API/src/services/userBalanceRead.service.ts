import { AppDataSource } from "../data-source";

import { User } from "../entities/user.entity";

import { AppError } from "../errors/appErrors";

const userBalanceReadService = async (username: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const user = users.find((user) => user.username == username);

  if (!user) {
    throw new AppError(404, "user not found");
  }

  return { balance: user?.account.balance };
};

export default userBalanceReadService;
