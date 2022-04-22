import * as S from "./style";
import Input from "../Input";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SkillSchema } from "../../Validation";
import api from "../../Services/api";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";

const ModalCreateSkill = ({ token, setShowModal}) => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(SkillSchema),
  });
  const onSubmitFunction = (data) => {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Tecnologia adicionada com sucesso!");
        setShowModal(false)
      })
      .catch((error) => toast.error("Ops! ocorreu algum erro ao tentar adicionar a tecnologia"));
  };

  useEffect(() => {
    if (formState.errors.title) {
      toast.error("Preencha todos os campos!")
    }
  }, [formState.errors])

  return (
    <S.Container>
      <S.ModalContainer>
        <S.ModalHeader>
          <h3>Cadastrar Tecnologia</h3>
          <span onClick={() => setShowModal(false)}>x</span>
        </S.ModalHeader>
        <S.ModalBodyForm
          as={motion.form}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          onSubmit={handleSubmit(onSubmitFunction)}
        >
          <Input
            height="70px"
            label="Nome"
            name="title"
            register={register}
            placeholder="Digite aqui o nome da tecnologia"
          />
          <S.StatusContainer>
            <label>Selecionar status</label>
            <S.SelectContainer>
              <select {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </S.SelectContainer>
          </S.StatusContainer>
          <Button type="submit" width="90%" color="var(--pink-1)">
            Cadastrar Tecnologia
          </Button>
        </S.ModalBodyForm>
      </S.ModalContainer>
    </S.Container>
  );
};
export default ModalCreateSkill;
