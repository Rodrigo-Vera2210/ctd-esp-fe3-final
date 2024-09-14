import React from "react";
import Card from "../Components/Card";
import { useDoctoresStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useDoctoresStates();

  return (
    <main className="" >
      <div className='card-grid'>
        {state.favs && state.favs.map((doctor) => {
            return <Card key={doctor.id} name={doctor.name} username={doctor.username} id={doctor.id} doctor={doctor}/>
          }
        )}
      </div>
    </main>
  )
};

export default Favs;
