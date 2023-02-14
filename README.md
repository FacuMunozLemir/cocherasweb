# Nombre del proyecto: Mi cochera app

## Mi cochera app V1.0.0

...

## Acerca del proyecto

Proyecto creado especialmente para la materia Administración de Proyectos de la carrera Ingeniería en Informática de la "Universidad Católica Santiago del Estero" con el objetivo de mostrar el uso de ReactJs en combinación con una base de datos No Sql como es Firebase.
Este proyecto simula el cobro a vehículos por hora de un estacionamiento privado.
...

## Funcionalidades principales

-
- Alta de vehículos: se podrá cargar un vehículo con patente y tipo (auto, camioneta, moto) y el sistema controlará que el vehículo (buqeda por patente) no se encuentre cargado en el sistema.
- La patentete puede ser ingresada en minúsculas ya que el sistema guarda siempre toda patente como mayúsucula.
- Consultar vehículos estacionados y filtro dinámico. La idea del filtro dinámico es que a medida que el usuario vaya escribiendo la patente que busca, en la lista debajo del filtro vayan apreciendo en tiempo real los resultado coincidentes.
- Cobrar: el usuario podrá marcar salida de un vehículo, para esta operación el sistema calculará automáticamente el precio a abonar por parte del cliente.

...

## Flujo de interacción del usuario

1. El usuario Ingresa una patente.
2. El usuario selecciona el típo de vehículo que va a ingresar.
3. El usuario clickea el botón "Cargar vehículo" para dar de alta un vehículo entrante.
4. En la pestaña "cobrar" del menú de navegación, el usuario puede acceder a la lísta de vehículos estacionados actualmente, teniendo la posibilidad de filtrar por patente.
5. Para finalizar el usuario puede marcar la salida de un vehículo dando click en el botón cobrar justo a la par del vehículo al que desea dar salida.
6. Se mostrará un cartel de confirmación con el precio a abonar por parte del cliente de acuerdo al tiempo que estuvo en el estacionamiento

### IMPORTANTE: en caso de haber permanecido menos de 5 minutos el auto no deberá abonar ningún monto.

...

## ¿Cómo usar el proyecto?

### Clonar el repositorio

$ git clone https://github.com/FacuMunozLemir/cocherasweb

### Ir al repositorio

$ cd cocherasweb

### Instalar las dependencias

$ npm install

### Ejecutar la app

$npm start

...

## Dependencias aparte del proyecto

La idea de esta sección es dejar mostrado cuales son las otras dependencias que el proyecto podría llegar a necesitar, junto con sus versiones, en caso que no funcione una vez clonado

    "react-dom": "^18.2.0",
    "react-router-dom": "^6.7.0",
    "@uiball/loaders": "^1.2.6",
    "firebase": "^9.16.0",
    "sweetalert2": "^11.7.1",
    "sweetalert2-react-content": "^5.0.7",
