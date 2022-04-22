import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: var(--grey-4);

  button {
      cursor: pointer;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 72px;
  padding: 0px 10px 0px 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderItems = styled.div`
  width: 90%;
  max-width: 768px;
  display: flex;
  justify-content: space-between;
`;

export const UserContainer = styled.div`
  width: 100%;
  height: 118px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--grey-3);
  border-top: 1px solid var(--grey-3);
`;

export const UserItems = styled.div`
  width: 90%;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  h1 {
    font-size: 18px;
    color: var(--grey-0);
  }

  span {
    font-size: 12px;
    font-weight: 600;
    color: var(--grey-1);
  }
`;

export const SkillsContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

export const EmptyList = styled.div`
  width: 90%;
  max-width: 400px;
  height: 150px;
  display: flex;
  justify-content: center;
  max-width: 768px;
  gap: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--grey-3);
  border-radius: 4px;
  margin-top: 20px;
  p {
      width: 65%;
      text-align: center;
      color: var(--grey-1);
      font-weight: 600;
  }
`;

export const AddContainer = styled.div`
width: 90%;
max-width: 768px;
display: flex;
justify-content: space-between;
align-items: center;
margin: 15px 0px 5px 0px;

h2 {
    color: var(--grey-0);
    font-size: 16px;
}

button {
    font-weight: 900;
    font-size: 18px;
}
`