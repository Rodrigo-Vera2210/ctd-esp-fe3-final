import React, { useState } from "react";


const Form = ({customer, setCustomer, handleSubmit}) => {
  //Aqui deberan implementar el form completo con sus validaciones
  

  const handleChangeNombre = (e) => {
    setCustomer({ ...customer, nombre: e.target.value })
  }
  const handleChangeCorreo = (e) => {
    setCustomer({ ...customer, correo: e.target.value })
  }

  return (
    <div>
      <form>
        <input 
          type="text" 
          placeholder="Ingrese su nombre"
          value={customer.nombre}
          onChange={handleChangeNombre}/>
        <input 
          type="text" 
          placeholder="Ingrese su correo"
          value={customer.correo}
          data-testid="correo"
          onChange={handleChangeCorreo}/>
        <input 
          type="submit" 
          value="Enviar"
          onClick={handleSubmit}/>
      </form>
    </div>
  );
};

export default Form;
