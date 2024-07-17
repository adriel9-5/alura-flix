import styles from "./Card.module.css";
import CardVideo from "components/CardVideo";


function Card(props) {

  const {categoria, color } = props.datos
  const {videos} = props

const dataColor = {
  backgroundColor : color
}


  return (

      <section className={styles.categoria}>
          <h2 style={dataColor}>{categoria}</h2>
          <div className={styles.videoCard}>
            
              {
                videos.map( (video, index)=> <CardVideo key={index} datos={video}/> )
              }
             
          </div>
      </section>
    
  );
}

export default Card;
// { id, title, photo }