import { Container, InputContainer } from "./style";

const Input = ({ label, height, register, name, ...rest }) => {
  return (
    <Container>
      <InputContainer height={height}>
        <label>{label}</label>
        <input {...register(`${name}`)} {...rest} />
      </InputContainer>
    </Container>
  );
};
export default Input;
