import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeholder from '../../assets/placeholder-image.png'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { HeaderPage } from "../Header/HeaderPage";

function SubCategorias() {
  const { id, name } = useParams();

  const [subCategorias, setSubCategorias] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&api_key=639ffac191a35e90345c4e5e6f416515`)
      .then(response => response.json())
      .then(data => setSubCategorias(data))
  }, []);

  return (
    <>
      <HeaderPage title={name} />
      <section className="flex flex-wrap w-full bg-LightBlue pt-28">

        {
          subCategorias.results?.map(subcategoria => (
            <article key={subcategoria.id} className="w-full flex flex-col items-center py-10 md:w-1/2">

              <Link to={`/detalles/${subcategoria.title}/${subcategoria.id}`}>
                <LazyLoadImage src={`https://image.tmdb.org/t/p/w300${subcategoria.poster_path}`} alt={subcategoria.title}
                  className="rounded-lg mb-2"
                  placeholderSrc={placeholder}
                  width={300}
                  height={450}
                  effect="blur"
                  />
              </Link>
              <p className="text-2xl text-DarkBlue font-semibold text-center px-3">{subcategoria.title}</p>
              <p className="text-white text-lg font-semibold">Fecha de Lanzamiento: {subcategoria.release_date}</p>
            </article>
          ))
        }
      </section>
      <Footer />
    </>
  );
};

export { SubCategorias };