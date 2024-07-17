import styles from "./CampoTexto.module.css";
import { useState } from "react";



function CampoTexto(props){
    
    const manejarCambio = (evento)=>{
        props.actualizarValor(evento.target.value)
    }

    return (
        <div className={styles.campo}>
            <label>{props.titulo}</label>
            <input    onChange={manejarCambio}   placeholder={props.placeholder} required={props.required} value={props.valor} />
        </div>
    )
}


export default CampoTexto;