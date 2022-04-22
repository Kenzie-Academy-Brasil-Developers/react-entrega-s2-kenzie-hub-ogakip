import * as S from "./style";
import Input from "../Input";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UpdateSkill } from "../../Validation";
import api from "../../Services/api";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ModalEdit = ({ setShowEditModal, userToken, listUserSkills }) => {
  const [currentSkill] = useState(
    JSON.parse(localStorage.getItem("currentSkill"))
  );
  const [deleteSkill, setDeleteSkill] = useState(false);
  const [findSkill] = useState(
    listUserSkills.find((skill) => skill.id === currentSkill)
  );
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(UpdateSkill),
  });
  const onSubmitFunction = (data) => {
    const newData = {
      status: data.status,
    };
    api
      .put(`/users/techs/${currentSkill}`, newData, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        toast.success("Tecnologia editada com sucesso!");
        setTimeout(() => {
          setShowEditModal(false);
        }, 1000);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (deleteSkill) {
      api.delete(`users/techs/${currentSkill}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      toast.success("Tecnologia removida com sucesso!");
      setTimeout(() => {
        setShowEditModal(false);
      }, 1000);
    }
  }, [deleteSkill]);

  return (
    <S.Container>
      <S.ModalContainer>
        <S.ModalHeader>
          <h3>Editar Tecnologia</h3>
          <span onClick={() => setShowEditModal(false)}>x</span>
        </S.ModalHeader>
        <S.ModalBodyForm
          as={motion.form}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit(onSubmitFunction)}
        >
          <Input
            readOnly="readonly"
            height="70px"
            label="Nome"
            value={findSkill.title}
            name="title"
            register={register}
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
          <S.ButtonContainer>
            <Button type="submit" width="45%" color="var(--pink-1)">
              Editar
            </Button>
            <Button
              type="button"
              onClick={() => setDeleteSkill(true)}
              width="45%"
              color="rgb(255, 0, 0, 0.3)"
            >
              Excluir
            </Button>
          </S.ButtonContainer>
        </S.ModalBodyForm>
      </S.ModalContainer>
    </S.Container>
  );
};
export default ModalEdit;
