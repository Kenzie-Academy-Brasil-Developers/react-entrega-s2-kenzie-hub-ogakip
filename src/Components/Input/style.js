import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: ${(props) => (props.height ? props.height : "60px")};
  display: flex;
  justify-content: center;

  label {
    font-size: 12.18px;
    font-weight: 400;
    color: var(--grey-0);
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  input {
    width: 100%;
    padding: 10px 0px 10px 15px;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: var(--grey-2);
    color: var(--grey-0);
    ::placeholder {
      color: #868e96;
    }
    :focus {
      outline-color: var(--grey-0);
    }
  }
`;
