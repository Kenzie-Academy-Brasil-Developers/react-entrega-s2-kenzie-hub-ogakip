import { Container, InputContainer } from "./style";

const Input = ({ label, error, height, register, name, ...rest }) => {
  return (
    <Container height={height}>
      <InputContainer>
        <label>{label} {!!error && <span> - {error}</span>}</label>
        <input {...register(`${name}`)} {...rest} />
      </InputContainer>
    </Container>
  );
};
export default Input;