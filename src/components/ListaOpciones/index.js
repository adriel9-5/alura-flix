import { videosData } from "routes";
import styles from "./ListaOpciones.module.css";
import { useState } from "react";


function ListaOpciones(props) {

   

    const manejarCambio = (e)=>{
        console.log("cambio", e.target.value);
        props.actualizarEquipo(e.target.value)
    }


    return (

        <div className={styles.equipos}>
            <label>Seleccione Categoria</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>Seleccionar Categoria</option>
               {props.categorias.map((categoria, index)=>{
                    return(
                        <option key={index} >{categoria}</option>
                    )
              })}  
            </select>
        </div>
    )
}


export default ListaOpciones;