import * as S from "./style";
import Edit from "../../Assets/edit.svg";

const CardSkill = ({ title, status, id, setShowEditModal }) => {
  return (
    <S.Container>
      <h3>{title}</h3>
      <div>
        <img
          onClick={(event) => {
            setShowEditModal(true);
            localStorage.setItem(
              "currentSkill",
              JSON.stringify(event.target.id)
            );
          }}
          id={id}
          src={Edit}
          alt="edit pen"
        />
        <span>{status}</span>
      </div>
    </S.Container>
  );
};
export default CardSkill;
