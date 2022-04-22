import * as S from "./style";
import { useState, useEffect } from "react";
import api from "../../Services/api";
import Logo from "../../Assets/Logo.svg";
import Button from "../../Components/Button";

const Home = () => {
  const [userId] = useState(JSON.parse(localStorage.getItem("userId")));
  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get(`/users/${userId}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  }, [userId]);

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.HeaderItems>
          <img src={Logo} alt="Kenzie Hub Logo" />
          <Button width="56px" color="var(--grey-3)">
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
      
    </S.Container>
  );
};
export default Home;
