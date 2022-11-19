import { useEffect, useState } from "react";
import { Container } from "./style";
import { useTransactions } from "../../providers/trasactions";
import { TransactionCard } from "../../components/transactionCard";

export const TransactionsList = () => {
  const { transactions, renewTransaction } = useTransactions();
  const [typeFilter, setTypeFilter] = useState("all");
  const [dateFilter, setDAteFilter] = useState("");

  interface ITransiction {
    createdAt: string;
    transaction_id: string;
    value: number;
    type: string;
  }

  return (
    <Container>
      <div className="transaction_filter">
        <button
          className="transaction_filter_in"
          onClick={() => {
            typeFilter == "cashIn"
              ? setTypeFilter("all")
              : setTypeFilter("cashIn");
          }}
        >
          Entradas
        </button>
        <button
          className="transaction_filter_out"
          onClick={() => {
            typeFilter == "cashOut"
              ? setTypeFilter("all")
              : setTypeFilter("cashOut");
          }}
        >
          Saídas
        </button>
        <input
          className="input_date_filter"
          type="date"
          onChange={(e) => {
            setDAteFilter(e.target.value);
          }}
        ></input>
      </div>
      <ul>
        {transactions
          ?.filter((tr: ITransiction) => {
            const dateCreated = new Date(tr.createdAt);
            const newDateFilter = new Date(dateFilter);
            return (
              (tr.type == typeFilter || typeFilter == "all") &&
              (dateCreated.getDate() - 1 == newDateFilter.getDate() ||
                dateFilter == "")
            );
          })
          .map((transaction: ITransiction) => {
            return (
              <TransactionCard
                date={new Date(transaction.createdAt) as Date}
                value={transaction.value as number}
                type={transaction.type as string}
                key={transaction.transaction_id}
              ></TransactionCard>
            );
          })}
      </ul>
    </Container>
  );
};
export const a = "";
