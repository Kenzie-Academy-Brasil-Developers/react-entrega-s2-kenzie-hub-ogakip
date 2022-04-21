import { Container } from "./style";

const Button = ({ children, width, color,...rest }) => {
  return (
  <Container width={width} color={color} >
      <button {...rest} >{ children }</button>
  </Container>
  );
};
export default Button;
