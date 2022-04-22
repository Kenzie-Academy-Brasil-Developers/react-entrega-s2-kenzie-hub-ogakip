import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgb(0, 0, 0, 0.3);
`;

export const ModalContainer = styled.div`
  width: 90%;
  max-width: 300px;
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  background-color: var(--grey-3);
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 15px 0px 15px;
  background-color: var(--grey-2);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  h3 {
    font-size: 14px;
    color: var(--grey-0);
  }

  span {
    cursor: pointer;
    color: var(--grey-1);
    font-size: 16px;
  }
`;

export const ModalBodyForm = styled.form`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 20px 0px 25px 0px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
export const StatusContainer = styled.div`
  width: 90%;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  label {
    color: var(--grey-0);
    font-size: 12.18px;
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

    option {
      background-color: var(--grey-2);
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;
