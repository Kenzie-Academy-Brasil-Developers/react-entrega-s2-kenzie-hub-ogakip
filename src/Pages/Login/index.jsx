import * as S from "./style";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import Logo from "../../Assets/Logo.svg";
import Eye from "../../Assets/eyegrey.svg";
import EyeSlash from "../../Assets/eyeoffgrey.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../Validation";
import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../Services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        localStorage.setItem("userToken", JSON.stringify(response.data.token));
        localStorage.setItem("userId", JSON.stringify(response.data.user.id));
        toast.success("Login realizado com sucesso!");
        setTimeout(() => {
          history.push("/");
        }, 1500);
      })
      .catch((error) => console.log(error));
  };

  if (localStorage.getItem("userToken")) {
    return <Redirect to="/" />;
  }

  return (
    <S.Container>
      <S.LogoImage src={Logo} alt="Logo Kenzie Hub" />
      <S.FormContainer>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            autoComplete="off"
            height="70px"
            label="Email"
            register={register}
            name="email"
            placeholder="Digite aqui seu email"
          />
          <S.PasswordContainer>
            <Input
              autoComplete="off"
              height="70px"
              label="Senha"
              type={showPassword ? "text" : "password"}
              register={register}
              name="password"
              placeholder="Digite aqui a sua senha"
            />
            <img
              onClick={() =>
                showPassword ? setShowPassword(false) : setShowPassword(true)
              }
              src={showPassword ? Eye : EyeSlash}
              alt="Show Password"
            />
          </S.PasswordContainer>
          <Button type="submit" width="90%" color="var(--pink-1)">
            Entrar
          </Button>
          <p>Ainda não tem uma conta?</p>
          <Link className="toRegister" to="/register">
            <Button width="90%" color="var(--grey-2)">
              Cadastre-se
            </Button>
          </Link>
        </form>
      </S.FormContainer>
    </S.Container>
  );
};
export default Login;