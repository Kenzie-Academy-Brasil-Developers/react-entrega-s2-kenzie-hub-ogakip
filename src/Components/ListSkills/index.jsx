import * as S from "./style";
import CardSkill from "../CardSkill";

const ListSkills = ({ listSkills }) => {
  return (
    <S.Container>
      <S.UlContainer>
        {listSkills.map((skill) => (
          <CardSkill title={skill.title} status={skill.status} />
        ))}
      </S.UlContainer>
    </S.Container>
  );
};
export default ListSkills;
