import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--grey-4);
`;

export const FormContainer = styled.div`
  width: 90%;
  max-width: 400px;
  /* height: 80%; */
  /* max-height: 1000px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: var(--grey-3);

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

    button {
        padding: 10px 0px 10px 0px;
    }
  }
`;

export const ModuleContainer = styled.div`
  width: 90%;
  height: 60px;
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
    padding: 9px 0px 9px 0px;
    background: none;
    color: var(--grey-1);
    outline: none;
    box-sizing: border-box;
    border: none;
    margin: 0;

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
  justify-content: space-between;
  margin: 25px 0px 25px 0px;
`;
