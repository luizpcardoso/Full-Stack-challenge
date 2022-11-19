import { Container } from "./style";
import { BiLogOut } from "react-icons/bi";
import { MdAttachMoney } from "react-icons/md";
import userPerfil from "../../assets/images/image 1.svg";
import { ModalPay } from "../../components/modalPay";
import { useUser } from "../../providers/user";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { TransactionsList } from "../../components/ListTransactions";
import { useTransactions } from "../../providers/trasactions";

export const Dashboard = () => {
  const history = useHistory();
  const username = localStorage.getItem("@challenge:username") || "";
  const [handleOpenModal, setHandleOpenModal] = useState(false);
  const { transactions, renewTransaction } = useTransactions();
  const { balance, logout, getBalance } = useUser();

  useEffect(() => {
    renewTransaction();
  }, []);
  useEffect(() => {
    getBalance();
  }, [transactions]);

  const token = localStorage.getItem("@challenge:token");
  if (!token) {
    toast.error("Faça login para acessar esta página");
    history.push("/");
  }

  return (
    <Container>
      <ModalPay
        handdleOpen={handleOpenModal}
        setHandleOpenModal={setHandleOpenModal}
      />
      <section className="user_infos">
        <img src={userPerfil}></img>

        <p>@{username}</p>

        <p>R${Number(balance).toFixed(2)}</p>
      </section>

      <TransactionsList />
      <section className="pay_options">
        <button
          onClick={() => {
            logout();
          }}
        >
          <BiLogOut />
        </button>
        <button
          onClick={(event) => {
            event.preventDefault();

            setHandleOpenModal(true);
          }}
        >
          <MdAttachMoney />
        </button>
      </section>
    </Container>
  );
};
