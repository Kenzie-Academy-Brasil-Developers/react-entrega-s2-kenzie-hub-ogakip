import { Container, InputContainer } from "./style";

const Input = ({ label, register, name, ...rest }) => {
  return (
    <Container>
      <InputContainer>
        <label>{label}</label>
        <input {...register(`${name}`)} {...rest}/>
      </InputContainer>
    </Container>
  );
};
export default Input;