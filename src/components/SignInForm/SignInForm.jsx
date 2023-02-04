import React from "react";
import "./signinform.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createNewHourVehicle } from "../../services/firestore";

function SignInForm() {
  const navigate = useNavigate();

  const [dataForm, setDataForm] = useState({
    patente: "",
    tipovehiculo: "AUTO",
  });

  // function handleSelect(e) {
  //   let name = e.target.name;
  //   const valor = e.target.value;

  //   const newDataForm = { ...dataForm };
  //   newDataForm[name] = valor;
  //   setDataForm(newDataForm);
  // }

  function inputChangeHandler(evt) {
    let name = evt.target.name;
    let value = evt.target.value.toUpperCase();

    const newDataForm = { ...dataForm };
    newDataForm[name] = value;
    setDataForm(newDataForm);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let hora = new Date();
    let hora2 = hora.getHours() + ":" + hora.getMinutes();

    const datosporhora = {
      patente: dataForm["patente"],
      tipo: dataForm["tipovehiculo"],
      fechaentrada: hora2,
      fechasalida: null,
    };

    createNewHourVehicle(datosporhora).then(navigate(`/`));

    alert("El vehículo se cargo correctamente");
  }

  return (
    <form className="formularioCarga" onSubmit={handleSubmit}>
      <input
        type="text"
        name="patente"
        placeholder="PATENTE"
        onChange={inputChangeHandler}
        required
      />
      <select name="tipovehiculo" onChange={inputChangeHandler} required>
        <option value="AUTO">AUTO</option>
        <option value="CAMIONETA">CAMIONETA</option>
        <option value="MOTO">MOTO</option>
      </select>
      <button className="btnConfirmar" type="submit">
        Cargar vehículo
      </button>
    </form>
  );
}

export default SignInForm;
