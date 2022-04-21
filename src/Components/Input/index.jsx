import { Container, InputContainer } from "./style";

const Input = ({ label, height, register, name, ...rest }) => {
  return (
    <Container height={height}>
      <InputContainer>
        <label>{label}</label>
        <input {...register(`${name}`)} {...rest} />
      </InputContainer>
    </Container>
  );
};
export default Input;
