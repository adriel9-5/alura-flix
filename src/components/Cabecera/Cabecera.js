import { Link } from "react-router-dom";
import styles from "./Cabecera.module.css"
import logo from "./image 1.png"
import CabeceraLink from "../CabeceraLink/CabeceraLink";


function Cabecera() {
    return(
        <header className={styles.cabecera}>
            <Link to="/">
            <section className={styles.logoContainer}>
                <img src={logo} alt="logoAlura"/> 
            </section>
            </Link>
            <nav>
                <CabeceraLink url="./">
                    HOME
                </CabeceraLink>
                <CabeceraLink url="./NuevoVideo">
                    NUEVO VIDEO
                </CabeceraLink>
            </nav>
        </header>
    )
}

export default Cabecera;