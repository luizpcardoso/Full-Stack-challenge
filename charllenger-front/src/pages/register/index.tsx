import { Container } from "./style";
import { useUser } from "../../providers/user";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import ImageRegister from "../../assets/images/register.svg";

interface Data {
  username: string;
  password: string;
}

export const Register = () => {
  const { signIn } = useUser();
  const history = useHistory();

  const formSchema = yup.object().shape({
    username: yup.string().required("Username obrigatório"),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: Data) => {
    signIn(data);
  };

  return (
    <>
      <Container>
        <section>
          <div className="div_details">
            <img src={ImageRegister}></img>
          </div>
          <div className="div_login">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2>Cadastro</h2>
              <input
                className="user_input"
                placeholder="usuário"
                {...register("username")}
              ></input>
              <input
                className="password_input"
                type="password"
                placeholder="password"
                {...register("password")}
              ></input>
              <span>
                {errors.password || errors.username
                  ? "Preencha todos os campos"
                  : ""}
              </span>
              <div className="div_login_buttons">
                <button
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  Voltar
                </button>
                <button type="submit">Concluir</button>
              </div>
            </form>
          </div>
        </section>
      </Container>
    </>
  );
};
