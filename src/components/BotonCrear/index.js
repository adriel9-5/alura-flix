import styles from "./BotonCrear.module.css";


function BotonCrear(props) {
    return(
        <button className={styles.boton}>{props.children}</button>
    )
}

export default BotonCrear;