import axios from "axios"
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "../../reducers/reducer";


const IsFavs = localStorage.getItem("favs") ? JSON.parse(localStorage.getItem("favs")) : [];

export const initialState = {
  doctores: [],
  favs: IsFavs,
  theme: "light",
}

const DoctoresStates = createContext();

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState();
  const [favs, setFavs] = useState(IsFavs);
  const [doctores, setDoctores] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = "https://jsonplaceholder.typicode.com/users";
  
  useEffect(() => {
      axios(url).then((res) => {
          setDoctores(res.data);
          dispatch({ type: "GET_DOCTORES", payload: res.data });
      });
  }, []);
  
  useEffect(() => {
    state.favs && localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);
  
  const toggleTheme = () => {
    dispatch({
      type: "SET_THEME",
      payload: state.theme === "light" ? "dark" : "light",
    });
  };

  return (
    <DoctoresStates.Provider value={{state, dispatch, toggleTheme}}>
      {children}
    </DoctoresStates.Provider>
  );
};

export default ContextProvider

export const useDoctoresStates = () => useContext(DoctoresStates)