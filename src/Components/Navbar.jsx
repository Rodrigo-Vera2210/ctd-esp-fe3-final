import React from 'react'
import { Link } from 'react-router-dom'
import { useDoctoresStates } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, toggleTheme } = useDoctoresStates();
  return (
    <nav>
      <Link>
        <h3>DH Odonto</h3>
      </Link>
      <div>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <Link to="/"><h5>Home</h5></Link>
        <Link to="/Contact"><h5>Contacto</h5></Link>
        <Link to="/favs"><h5>Favoritos</h5></Link>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button onClick={toggleTheme}>{ state.theme === "light" ? "🌙"  : "🌞"}</button>
      </div>
    </nav>
  )
}

export default Navbar