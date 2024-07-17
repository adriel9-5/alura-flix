import Cabecera from "components/Cabecera/Cabecera";
import Formulario from "pages/NuevoVideo";
import { useState } from "react";
const { default: Inicio } = require("pages/inicio");
const { BrowserRouter, Routes, Route } = require("react-router-dom");


export const videosData = [
    {
      categoria: "FRONT END",
      color: "#6BD1FF",
    },
    {
      categoria: "BACK END",
      color: "#FFBA05",
    },
    {
      categoria: "INNVOACIÓN Y GESTIÓN",
      color: "#00C86F",
    },
  ];

  // registrar colaborador

 



function AppRoutes() {

  const [videos, actualizarVideo] = useState([])

 const registrarVideo = (video)=>{
      console.log("nuevo video", video);
      actualizarVideo([...videos, video])
  }


    return(
        <BrowserRouter>
        <Cabecera/>
            <Routes>
                <Route path="/" element={<Inicio/>}></Route>
                <Route path="/NuevoVideo" element={<Formulario  registrarVideo={registrarVideo} categorias={videosData.map((categoria)=>categoria.categoria)} />} ></Route>
            </Routes>

        </BrowserRouter>
    )
}

export default AppRoutes;