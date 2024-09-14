import React from 'react'
import Card from '../Components/Card'
import { useDoctoresStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useDoctoresStates();

  console.log(state)
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.doctores && state.doctores.map((doctor) => {
            return <Card key={doctor.id} name={doctor.name} username={doctor.username} id={doctor.id} doctor={doctor}/>
          }
        )}
      </div>
    </main>
  )
}

export default Home