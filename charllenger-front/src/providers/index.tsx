import { ReactNode } from "react";
import { UserProvider } from "./user";
import { TransactionsProvider } from "./trasactions";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <TransactionsProvider>
      <UserProvider>{children}</UserProvider>
    </TransactionsProvider>
  );
};

export default Providers;
