import React, { useState, useEffect } from "react";
import { getItems, getItemsByDomain } from "../../services/firestore";
import Filtro from "../Filtro/filtro";
import ListaVehiculos from "../ListaVehiculos/ListaVehiculos";
import "./contenedorlistavehiculos.css";

function ContenedorListaVehiculos() {
  const [data, setData] = useState([]);
  const [busqueda2, setBusqueda2] = useState();

  useEffect(() => {
    if (busqueda2 == null || busqueda2 == "") {
      getItems().then((respuesta) => setData(respuesta));
    } else {
      getItemsByDomain(busqueda2).then((respuesta) => setData(respuesta));
    }
  }, [busqueda2]);

  function filtrado(busqueda) {
    setBusqueda2(busqueda);
  }

  return (
    <div className="listContainer">
      <Filtro onBusqueda={filtrado} />
      <div className="table">
        <ListaVehiculos itemData={data} />
      </div>
    </div>
  );
}

export default ContenedorListaVehiculos;
