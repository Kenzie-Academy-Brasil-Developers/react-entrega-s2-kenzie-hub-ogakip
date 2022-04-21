import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Logo from "../../Assets/Logo.svg";
import * as S from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../../Validation";

const Register = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  return (
    <S.Container>
      <S.HeaderContainer>
        <img src={Logo} alt="Kenzie Hub Logo" />
        <Button width="80px">Voltar</Button>
      </S.HeaderContainer>
      <S.FormContainer>
        <h1>Crie sua conta</h1>
        <span>Rápido e grátis, vamos nessa!</span>
        <form>
          <Input
            height="80px"
            autoComplete="off"
            label="Nome"
            register={register}
            name={"name"}
            placeholder="Digite aqui seu nome"
          />
          <Input
            autoComplete="off"
            label="Email"
            register={register}
            name={"email"}
            placeholder="Digite aqui seu email"
          />
          <Input
            autoComplete="off"
            label="Senha"
            register={register}
            name={"password"}
            placeholder="Digite aqui sua senha"
          />
          <Input
            autoComplete="off"
            label="Confirmar Senha"
            register={register}
            name={"confirmPassword"}
            placeholder="Digite novamente sua senha"
          />
          <S.ModuleContainer>
          <label>Selecionar Módulo</label>
            <S.SelectContainer>
              <select {...register("module")}>
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
          <Button width="90%" color="var(--pink-3)">
            Cadastrar
          </Button>
        </form>
      </S.FormContainer>
    </S.Container>
  );
};
export default Register;
