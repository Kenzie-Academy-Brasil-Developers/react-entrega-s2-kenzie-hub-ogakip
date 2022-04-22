import styled from "styled-components";

export const Container = styled.li`
  width: 90%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 12px 10px 12px 10px;
  margin: 15px;
  background-color: var(--grey-4);
  border-radius: 4px;

  h3 {
    font-size: 14px;
    color: var(--grey-0);
  }

  span {
    font-size: 12px;
    color: var(--grey-1);
  }
`;
