import * as S from "./style";

const CardSkill = ({ title, status }) => {
  return (
    <S.Container>
      <h3>{title}</h3>
      <span>{status}</span>
    </S.Container>
  );
};
export default CardSkill;
