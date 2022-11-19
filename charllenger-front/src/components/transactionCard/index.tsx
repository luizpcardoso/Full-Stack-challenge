import { Container } from "./style";

interface TrasactionCard {
  date: Date;
  value: number;
  type: string;
}

export const TransactionCard = ({ date, value, type }: TrasactionCard) => {
  return (
    <Container>
      <p>{type == "cashOut" ? "Saída" : "Entrada"}</p>
      <p className="date">{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</p>

      <p className={type == "cashOut" ? "saida" : "entrada"}>
        {type == "cashIn"
          ? `R$${Number(value).toFixed(2)}`
          : `-R$${Number(value).toFixed(2)}`}
      </p>
    </Container>
  );
};
