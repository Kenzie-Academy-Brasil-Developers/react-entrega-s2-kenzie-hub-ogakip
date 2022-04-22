import "./App.css";
import GlobalStyle from "./Styles/global";
import Routes from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <div>
        <GlobalStyle />
      <AnimatePresence>
        <Routes />
        </AnimatePresence>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="dark"
        />
    </div>
  );
};
export default App;
