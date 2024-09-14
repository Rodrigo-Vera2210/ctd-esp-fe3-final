import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  const url = "https://jsonplaceholder.typicode.com/users/" + id

  useEffect(() => {
    axios(url).then((res) => {
      setDetail(res.data)
    })
  },[])
  return (
    <>
      <h1>Detail Dentist {detail.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className='tabla-detalle'>
        <table>
          <thead>
            <td>Name</td>
            <td>Email</td>
            <td>Telefono</td>
            <td>Sitio web</td>
          </thead>
          <tbody>
            <td>{detail.name}</td>
            <td>{detail.email}</td>
            <td>{detail.phone}</td>
            <td>{detail.website}</td>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Detail