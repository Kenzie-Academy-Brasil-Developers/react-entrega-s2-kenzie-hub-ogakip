import styled from "styled-components";

export const Container = styled.div`

  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  background-color: pink;

  label {
    font-size: 12.18px;
    font-weight: 400;
  }

`;

export const InputContainer = styled.div`

  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: green;

  input {
    width: 100%;
    padding: 8px 0px 8px 0px;
    border: none;
  }

`;
