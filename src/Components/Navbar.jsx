import React from 'react'
import { Link } from 'react-router-dom'
import { useDoctoresStates } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state } = useDoctoresStates();
  return (
    <nav>
      <Link>
        <img src="../images/DH.png" alt='DH-logo' />
      </Link>
      <div>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <Link to="/"><h5>Home</h5></Link>
        <Link to="/Contact"><h5>Contacto</h5></Link>
        <Link to="/favs"><h5>Favoritos</h5></Link>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button>{ state.theme ? <>🌙</>  : <>🌞</>}</button>
      </div>
    </nav>
  )
}

export default Navbar