import styles from "./Banner.module.css";

function Banner() {
    return(
        <div className={styles.imagen}  style={{backgroundImage: `url(/img/banner.png)`}}>
            <img src="/img/player.png" className={styles.player} alt="imagenPlayer"></img>
        </div>
    )
}

export default Banner;