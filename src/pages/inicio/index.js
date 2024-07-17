import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
import styles from "./index.module.css";
import data from "data/db.json";

// lista de categorias
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

function Inicio() {
  const videos = data.videos;

  return (
    <>

      <Banner></Banner>
      {videosData.map( (categoria)=> <Card
      videos={videos}
       datos={categoria} 
       key={categoria.categoria}/>)}

    </>
  );
}

export default Inicio;

/*         
        <section className={styles.container}>

            {videos.map((video)=>{
                return(
                    <Card {...video} key={video.id}/>
                )
            })}

        </section> */
