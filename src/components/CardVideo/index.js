import styles from "./CardVideo.module.css";



function CardVideo(props) {
    const {category, photo, link, id, title} = props.datos

    return(
        <div className={styles.card}>
           <img src={photo} alt={title}/>

            <div className={styles.footer}>
                <img src="/public/img/borrar.png" alt="borrar"></img>
                <img ></img>  
            </div>  
        </div>
        

      
    )
}

export default CardVideo;


// <img src={photo} alt={title} className={styles.photo}></img>