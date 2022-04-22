import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const UlContainer = styled.ul`
  width: 90%;
  padding: 25px 0px 25px 0px;
  max-width: 768px;
  max-height: 350px;
  overflow-y: scroll;
  border-radius: 4px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--grey-3);
  margin-top: 20px;
  
  ::-webkit-scrollbar {
    width: 10px;
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--grey-2);
    border-radius: 15px;
  }
`;
