import React from "react";
import { Link } from "react-router-dom";
import { useDoctoresStates } from "./utils/global.context";


const Card = ({ name, username, id, doctor }) => {
  const { state, dispatch } = useDoctoresStates()
  const isFav = state.favs && state.favs.find((fav) => fav.id === id)
  console.log(name)

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({ type: isFav ? "REMOVE_FAV" : "ADD_FAV", payload: doctor });
  }

  return (
    <div className="card">
        <Link to={"/dentist/" + id}>
          <img src="./images/doctor.jpg" alt="" />
          <div className="card-container">
            <h4>{name}</h4>
            <h5>{username}</h5>
          </div>
        </Link>
        
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">{isFav ? "🌟" : "⭐"}</button>
    </div>
  );
};

export default Card;
