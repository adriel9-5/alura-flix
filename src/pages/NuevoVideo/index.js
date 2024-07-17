import Titulo from "components/Titulo";
import styles from "./Formulario.module.css";
import CampoTexto from "components/CampoTexto";
import ListaOpciones from "components/ListaOpciones";
import BotonCrear from "components/BotonCrear";
import { useState } from "react";

function Formulario(props) {
  const [titulo, actualizarTitulo] = useState("");
  const [video, actualizarVideo] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");

  const {registrarVideo} = props


  
  const manejarEnvio = (evento) => {
    evento.preventDefault();
    console.log("manejar el envio", evento);
    let datosEnviados = {
        titulo : titulo,
        video : video,
        foto : foto,
        equipo: equipo
    }
   registrarVideo(datosEnviados);
  };

  return (
    <section className={styles.formulario}>
      <Titulo>
        <h1>NUEVO VIDEO</h1>
      </Titulo>

      <p>Complete el formulario para crear una nueva tarjeta de video</p>

      <form onSubmit={manejarEnvio}>
        <h2>Crear Tarjeta</h2>
        <CampoTexto
          titulo="Titulo"
          placeholder="ingresar titulo"
          required
          valor={titulo}
          actualizarValor={actualizarTitulo}
        ></CampoTexto>
        
        <CampoTexto
          titulo="Video"
          placeholder="ingresar enlace del video"
          required
          valor={video}
          actualizarValor={actualizarVideo}
        ></CampoTexto>

        <CampoTexto
          titulo="Imagen"
          placeholder="ingresar enlace de la imagen"
          required
          valor={foto}
          actualizarValor={actualizarFoto}
        ></CampoTexto>

        <ListaOpciones categorias={props.categorias} valor={equipo} actualizarEquipo={actualizarEquipo}/>

        <BotonCrear>Crear</BotonCrear>
      </form>
    </section>
  );
}

export default Formulario;
