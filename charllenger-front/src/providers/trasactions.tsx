import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

interface TransactionsProviderData {
  transactions: [];
  renewTransaction: () => void;
  transactionSend: (data: DataTransaction) => void;
}
interface TransactionProps {
  children: ReactNode;
}
interface ITransaction {
  type: string;
}
interface DataTransaction {
  username: string;
  value: string;
}
interface Itransactions {
  createdAt: Date;
}

export const TransactionContext = createContext<TransactionsProviderData>(
  {} as TransactionsProviderData
);

export const TransactionsProvider = ({ children }: TransactionProps) => {
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("@challenge:token") || ""
  );

  const [transactions, setTransactions] = useState<[]>([]);

  const renewTransaction = () => {
    const token = localStorage.getItem("@challenge:token");
    api
      .get("/api/transactions", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const cashIn = response.data.cashIn.map((e: { type: string }) => {
          return { ...e, type: "cashIn" };
        });

        const cashOut = response.data.cashOut.map((e: { type: string }) => {
          return { ...e, type: "cashOut" };
        });

        const allTransactions: any = [...cashIn, ...cashOut].sort(
          (a: any, b: any) => {
            let c = new Date(b.createdAt) as Date;
            let d = new Date(a.createdAt) as Date;

            return c.getTime() - d.getTime();
          }
        );

        setTransactions([...allTransactions] as []);
      })
      .catch((error) => console.log("Problema na busca"));
  };

  const transactionSend = (data: DataTransaction) => {
    const token = localStorage.getItem("@challenge:token");
    api
      .post("/api/pay", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.error) {
          throw new Error();
        }
        toast.success("Quantia enviada com sucesso!");
        renewTransaction();
      })
      .catch((error) => toast.error("Erro no pagamento"));
  };

  return (
    <TransactionContext.Provider
      value={{ transactions, renewTransaction, transactionSend }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionContext);
