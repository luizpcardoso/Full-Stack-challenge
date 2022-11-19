export const compareDate = (date: Date, transactionDate: Date) => {
  if (!date) {
    return true;
  }

  if (
    new Date(date).getFullYear() == new Date(transactionDate).getFullYear() &&
    new Date(date).getDate() == new Date(transactionDate).getDate() &&
    new Date(date).getMonth() == new Date(transactionDate).getMonth()
  ) {
    return true;
  }
  return false;
};
