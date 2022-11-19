import { Container } from "./style";
import { useUser } from "../../providers/user";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import ImageLogin from "../../assets/images/csachwallpaper.svg";

interface Data {
  username: string;
  password: string;
}

export const Login = () => {
  const { login } = useUser();
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
    login(data);
  };

  return (
    <>
      <Container>
        <section>
          <div className="div_details">
            <img src={ImageLogin}></img>
          </div>
          <div className="div_login">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2>Login</h2>
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
                type="button"
                  onClick={() => {
                    history.push("/register");
                  }}
                >
                  Cadastrar
                </button>
                <button type="submit">Entrar</button>
              </div>
            </form>
          </div>
        </section>
      </Container>
    </>
  );
};
