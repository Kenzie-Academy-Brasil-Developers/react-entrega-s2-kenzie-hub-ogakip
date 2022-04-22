import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  align-items: center;
  background-color: var(--grey-4);

  button {
    cursor: pointer;
  }
`;

export const LogoImage = styled.img`
  width: 144px;
`;

export const FormContainer = styled.div`
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px 40px 0px;
  border-radius: 4px;
  gap: 10px;
  background-color: var(--grey-3);

  h1 {
    font-size: 18px;
    color: var(--grey-0);
    margin: 0px 0px 20px 0px;
  }

  form {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    p {
      align-self: center;
      color: var(--grey-1);
      font-size: 12px;
      font-weight: 600;
    }

    .toRegister {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;

export const PasswordContainer = styled.div`
  display: flex;
  width: 90%;

  img {
    width: 20px;
    margin: 30px 0px 0px 10px;
    cursor: pointer;
  }
`;
