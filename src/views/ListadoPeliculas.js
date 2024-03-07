import Pelicula from "./Pelicula";
import PageWrapper from "./PageWrapper";
import Paginacion from "./Paginacion";
import { useState } from "react";
import peliculasJson from "./peliculas.json";

function ListadoPeliculas() {

  const [paginaActual, setPaginaActual] = useState(1);
  const TOTAL_POR_PAGINA = 7;

  let peliculas = peliculasJson;


  let cargarPeliculas = ()=>{
    peliculas = peliculas.slice(
      (paginaActual - 1) * TOTAL_POR_PAGINA, //(1-1)=0 , 0*5 = 0
      paginaActual * TOTAL_POR_PAGINA
    );

  }
 
  const getTotalPaginas = () => {

    let cantidadTotalPeliculas = peliculasJson.length;

    return Math.ceil(cantidadTotalPeliculas / TOTAL_POR_PAGINA);

  };

 cargarPeliculas();

  return (
    <PageWrapper>
      {peliculas.map((pelicula) => (
        <Pelicula
          titulo={pelicula.titulo}
          calificacion={pelicula.calificacion}
          director={pelicula.director}
          actores={pelicula.actores}
          fecha={pelicula.fecha}
          duracion={pelicula.duracion}
          img={pelicula.img}
        >
          {pelicula.descripcion}
        </Pelicula>
      ))}

      <Paginacion
        pagina={paginaActual}
        total={getTotalPaginas()}
        onChange={(pagina) => {
          setPaginaActual(pagina);
        }}
      />
    </PageWrapper>
  );
}

export default ListadoPeliculas;
