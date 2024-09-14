import React, { useState } from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const [customer, setCustomer] = useState({
    nombre: "",
    correo: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const numRegex = /[0-9]/;
    if (
      customer.nombre.trim().length > 5 &&
      customer.correo.trim().length > 8 &&
      customer.correo.trim().includes("@") &&
      !numRegex.test(customer.nombre.trim())
    ) {
      setError(false);
      setShow(true);
    } else {
      setError(true);
      setShow(false);
    }
  };

  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form 
        customer = {customer} 
        setCustomer = {setCustomer}
        handleSubmit = {handleSubmit}/>
      {error && (
        <h4>Por favor, verifique su información</h4>
      )}

      {show && 
        <h2>
          Gracias {customer.nombre}, te contactaremos cuanto antes vía mail
        </h2>
      }
    </div>
  )
}

export default Contact