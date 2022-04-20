import "./App.css";
import GlobalStyle from "./Styles/global";
import Input from "./Components/Input";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Input placeholder="Digite aqui seu nome" label="Nome" />
    </div>
  );
};
export default App;