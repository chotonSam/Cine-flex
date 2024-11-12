import { useReducer, useState } from "react";
import Page from "./components/Page";
import { MovieContext, ThemeContext } from "./context/MyContext";
import { cartReducer, initialState } from "./reducers/MovieReduce";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cardMovie, setCardMovie] = useState([]);
  const [isDark, setIsDark] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <MovieContext.Provider value={{ state, dispatch }}>
        <Page />
        <ToastContainer position="bottom-right" />
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
