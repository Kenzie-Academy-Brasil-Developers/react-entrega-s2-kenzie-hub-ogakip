import api from "../../Services/api";
import * as S from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../../Validation";
import { useEffect, useState } from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import Logo from "../../Assets/Logo.svg";
import Eye from "../../Assets/eyegrey.svg";
import EyeSlash from "../../Assets/eyeoffgrey.svg";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  const onSubmitFunction = (data) => {
    api
      .post("/users", data)
      .then((response) => {
        toast.success("Conta criada com sucesso!");
        setTimeout(() => {
          history.push("/login");
        }, 1500);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const { name, email, password, confirmPassword, bio, contact } =
      formState.errors;
    const allErrors = [name, email, password, confirmPassword, bio, contact];
    const filterErrors = allErrors.filter((error) => error !== undefined);
    filterErrors.map((error) => toast.error(`${error.message}`));
  }, [formState.errors]);

  if (localStorage.getItem("userToken")) {
    return <Redirect to="/" />;
  }

  return (
    <S.Container>
      <S.HeaderContainer>
        <img src={Logo} alt="Kenzie Hub Logo" />
      </S.HeaderContainer>
      <S.FormContainer>
        <h1>Crie sua conta</h1>
        <span>Rápido e grátis, vamos nessa!</span>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            height="65px"
            autoComplete="off"
            label="Nome"
            register={register}
            name={"name"}
            placeholder="Digite aqui seu nome"
          />
          <Input
            height="65px"
            autoComplete="off"
            label="Email"
            register={register}
            name={"email"}
            placeholder="Digite aqui seu email"
          />
          <Input
            height="65px"
            autoComplete="off"
            label="Biografia"
            register={register}
            name={"bio"}
            placeholder="Digite aqui a sua biografia"
          />
          <Input
            height="65px"
            autoComplete="off"
            label="Contato"
            register={register}
            name={"contact"}
            placeholder="Digite aqui o seu contato"
          />
          <S.PasswordContainer>
            <Input
              type={showPassword ? "text" : "password"}
              height="65px"
              autoComplete="off"
              label="Senha"
              register={register}
              name={"password"}
              placeholder="Digite aqui sua senha"
            />
            <img
              onClick={() =>
                showPassword ? setShowPassword(false) : setShowPassword(true)
              }
              src={showPassword ? Eye : EyeSlash}
              alt="eye password"
            />
          </S.PasswordContainer>
          <Input
            type={showPassword ? "text" : "password"}
            height="65px"
            autoComplete="off"
            label="Confirmar Senha"
            register={register}
            name={"confirmPassword"}
            placeholder="Digite novamente sua senha"
          />
          <S.ModuleContainer>
            <label>Selecionar Módulo</label>

            <S.SelectContainer>
              <select {...register("course_module")}>
                <option value="Primeiro módulo (Introdução ao Frontend)">
                  Primeiro Módulo
                </option>
                <option value="Segundo módulo (Frontend Avançado)">
                  Segundo Módulo
                </option>
                <option value="Terceiro módulo (Introdução ao Backend)">
                  Terceiro Módulo
                </option>
                <option value="Quarto módulo (Backend Avançado)">
                  Quarto Módulo
                </option>
              </select>
            </S.SelectContainer>
          </S.ModuleContainer>
          <Button type="submit" width="90%" color="var(--pink-3)">
            Cadastrar
          </Button>
          <span>Já tem uma conta?</span>
          <Button
            onClick={() => history.push("/login")}
            color="var(--grey-1)"
            width="90%"
          >
            Faça Login
          </Button>
        </form>
      </S.FormContainer>
    </S.Container>
  );
};
export default Register;
