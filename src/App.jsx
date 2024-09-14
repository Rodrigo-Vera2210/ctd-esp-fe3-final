
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom"
import Home from "./Routes/Home"
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import { useDoctoresStates } from "./Components/utils/global.context";

function App() {
  const { state } = useDoctoresStates()
  return (
      <div className={`App ${state.theme}`}>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dentist/:id" element={<Detail/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/favs" element={<Favs/>}/>
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
