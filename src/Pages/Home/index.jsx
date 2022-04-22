import * as S from "./style";
import { useState, useEffect } from "react";
import api from "../../Services/api";
import Logo from "../../Assets/Logo.svg";
import Button from "../../Components/Button";
import ListSkills from "../../Components/ListSkills";
import ModalCreateSkill from "../../Components/ModalCreateSkill";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import ModalEdit from "../../Components/ModalEditSkill";

const Home = () => {
  const [userId] = useState(JSON.parse(localStorage.getItem("userId")));
  const [userToken] = useState(JSON.parse(localStorage.getItem("userToken")));
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [user, setUser] = useState();
  const [logout, setLogout] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (logout) {
      localStorage.removeItem("userId");
      localStorage.removeItem("userToken");
      history.push("/login");
    }
  }, [logout, history]);

  useEffect(() => {
    api
      .get(`/users/${userId}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  }, [userId, showModal, showEditModal]);

  if (!userToken) {
    return <Redirect to="/login" />;
  }

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.HeaderItems>
          <img src={Logo} alt="Kenzie Hub Logo" />
          <Button
            onClick={() => {
              setLogout(true);
            }}
            width="56px"
            color="var(--grey-3)"
          >
            Sair
          </Button>
        </S.HeaderItems>
      </S.HeaderContainer>
      <S.UserContainer>
        <S.UserItems>
          <h1>Olá, {user && user.name}</h1>
          <span>{user && user.course_module}</span>
        </S.UserItems>
      </S.UserContainer>
      <S.SkillsContainer>
        <S.AddContainer>
          <h2>Tecnologias</h2>
          <Button onClick={() => setShowModal(true)} width="30px">
            +
          </Button>
        </S.AddContainer>
        {user && (
          <>
            {user.techs.length > 0 ? (
              <ListSkills
                setShowEditModal={setShowEditModal}
                listSkills={user.techs}
              />
            ) : (
              <S.EmptyList>
                <p>Você ainda não possui nenhuma tecnologia listada</p>
              </S.EmptyList>
            )}
          </>
        )}
      </S.SkillsContainer>
      {showModal && (
        <ModalCreateSkill token={userToken} setShowModal={setShowModal} />
      )}
      {showEditModal && (
        <ModalEdit
          userToken={userToken}
          listUserSkills={user.techs}
          setShowEditModal={setShowEditModal}
        />
      )}
    </S.Container>
  );
};
export default Home;