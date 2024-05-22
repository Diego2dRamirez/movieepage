import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css'
import placeholder from '../../assets/placeholder-image.png'


function MejorValorado() {
  const [proximo, setProximo] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=639ffac191a35e90345c4e5e6f416515")
      .then(res => res.json())
      .then(data => setProximo(data))
  }, [])

  console.log(proximo);
  return (
    <section className="w-full mt-10 pl-4 mb-[3.5rem]">
      <h3 className="text-2xl text-DarkBlue font-semibold italic mb-5">Mejor valorado</h3>
      <article className="overflow-x-auto overflow-y-hidden whitespace-nowrap h-[300px] w-full pl-5 *:mx-2 *:my-2 *:inline-block">
        {
          proximo.results?.map((movie) => (
            <div key={movie.title} className='w-[150px] h-[250px]'>
              <Link to={`/detalles/${movie.title}/${movie.id}`}>
                <LazyLoadImage src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}
                  placeholderSrc={placeholder}
                  effect="blur" />
              </Link>
            </div>))
        }

      </article>
    </section>
  );
};

export { MejorValorado };