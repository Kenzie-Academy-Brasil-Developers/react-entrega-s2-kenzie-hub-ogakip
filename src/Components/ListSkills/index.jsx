import * as S from "./style";
import CardSkill from "../CardSkill";

const ListSkills = ({ listSkills, setShowEditModal }) => {
  return (
    <S.Container>
      <S.UlContainer>
        {listSkills.map((skill, index) => (
          <CardSkill
            setShowEditModal={setShowEditModal}
            title={skill.title}
            key={index}
            id={skill.id}
            status={skill.status}
          />
        ))}
      </S.UlContainer>
    </S.Container>
  );
};
export default ListSkills;
