import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--grey-4);

  button {
    cursor: pointer;
  }
`;

export const FormContainer = styled.div`
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: var(--grey-3);
  margin-bottom: 50px;

  h1 {
    font-size: 15px;
    margin: 33px 0px 18px 0px;
    color: var(--grey-0);
  }
  span {
    font-size: 10px;
    margin-bottom: 22px;
    color: var(--grey-1);
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 33px;

    input {
      padding: 14px 0px 14px 14px;
    }

    button {
      padding: 14px 0px 14px 0px;
    }

    @media (min-width: 768px) {
      button {
        padding: 10px 0px 10px 0px;
      }

      input {
        padding: 12px 0px 12px 14px;
      }
    }

    p {
      color: var(--grey-0);
      a {
        color: var(--pink-1);
        font-weight: 600;
      }
    }

    span {
      font-size: 12px;
    }
  }
`;

export const ModuleContainer = styled.div`
  width: 90%;
  height: 65px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  label {
    font-size: 12.18px;
    color: var(--grey-0);
  }
`;

export const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--grey-2);
  border-radius: 4px;

  select {
    width: 95%;
    padding: 14px 0px 14px 0px;
    background: none;
    color: var(--grey-1);
    outline: none;
    box-sizing: border-box;
    border: none;
    margin: 0;

    @media (min-width: 768px) {
      padding: 12px 0px 12px 0px;
    }

    option {
      background-color: var(--grey-2);
      box-sizing: content-box;
    }
  }
`;

export const HeaderContainer = styled.div`
  width: 90%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  margin: 50px 0px 25px 0px;

  width: 105px;
`;

export const PasswordContainer = styled.div`
  width: 90%;
  display: flex;

  img {
    width: 20px;
    margin: 27px 0px 0px 10px;
    cursor: pointer;
  }
`;
