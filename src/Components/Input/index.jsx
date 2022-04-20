import { Container, InputContainer } from "./style";

const Input = ({ label, name, ...rest }) => {
  return (
    <Container>
      <InputContainer>
        <label>{label}</label>
        <input {...rest} />
      </InputContainer>
    </Container>
  );
};
export default Input;
