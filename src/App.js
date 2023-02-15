import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/Nav/NavBar";
import Home from "./components/Home/Home";
import ContenedorListaVehiculos from "./components/ContenedorListaVehiculos/ContenedorListaVehiculos";
import Working from "./components/Working/Working";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cobrar" element={<ContenedorListaVehiculos />} />
        <Route path="/configuracion" element={<Working />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
