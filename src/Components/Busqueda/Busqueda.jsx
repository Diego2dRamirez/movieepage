import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeholder from '../../assets/placeholder-image.png'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { HeaderPage } from "../Header/HeaderPage";


function Busqueda() {

  const { value } = useParams()

  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${value}&api_key=639ffac191a35e90345c4e5e6f416515`)
      .then(res => res.json())
      .then(data => setSearch(data))
  }, []);

  console.log(search);

  return (
    <>
      <HeaderPage title={value} />
      <section className="flex flex-wrap w-full bg-LightBlue pt-28">
        {
          search.results?.map(movie => (
            <article key={movie.id} className="w-full flex flex-col items-center py-10 md:w-1/2">
             <Link to={`/detalles/${movie.title}/${movie.id}`}>
                <LazyLoadImage src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className="rounded-lg"
                placeholderSrc={placeholder}
                width={300}
                height={450}
                effect="blur"
                />
             </Link>
              <p className="text-2xl text-DarkBlue font-semibold text-center px-3 mt-6">{movie.title}</p>
              <p className="text-white text-lg font-semibold">Fecha de Lanzamiento: {movie.release_date}</p>
            </article>
          ))
        }
      </section>
      <Footer />

    </>
  );
};

export { Busqueda };