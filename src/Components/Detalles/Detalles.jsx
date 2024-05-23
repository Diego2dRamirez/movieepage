import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import placeholder from '../../assets/placeholder-image.png'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { HeaderPage } from "../Header/HeaderPage";

function Detalles() {

  const { title, titleId } = useParams();


  const [detalles, setDetalles] = useState([])
  const [recomendados, setRecomendados] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${titleId}?api_key=639ffac191a35e90345c4e5e6f416515`)
      .then(response => response.json())
      .then(data => setDetalles(data))
  }, [detalles]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${titleId}/recommendations?api_key=639ffac191a35e90345c4e5e6f416515`)
      .then(response => response.json())
      .then(data => setRecomendados(data))
  }, [recomendados]);


  return (
    <>

      <HeaderPage title={title} />

      <section className="w-full bg-LightBlue pt-44 flex flex-col items-center md:flex-row md:pb-20">

        <div className="mb-5 md:w-1/2 md:flex md:flex-col md:items-center">
          <LazyLoadImage src={`https://image.tmdb.org/t/p/w300${detalles.poster_path}`} alt={detalles.title}
            className="rounded-lg mb-2"
            placeholderSrc={placeholder}
            effect="blur"
          />
          <p className="text-3xl md:mt-5">
            <span className="text-yellow-300 mr-5">
              <ion-icon name="star-half-outline"></ion-icon>
            </span>
            <span className="text-DarkBlue font-semibold">{detalles.vote_average}</span>
          </p>
        </div>

        <div className="w-full flex flex-col items-center md:w-1/2">
          <LazyLoadImage src={`https://image.tmdb.org/t/p/w300${detalles.backdrop_path}`} alt={detalles.title}
            className="rounded-lg mb-2 md:w-[35rem]"
            placeholderSrc={placeholder}
            effect="blur"
          />
          <p className="text-white text-center p-5 font-semibold font-sans text-xl md:px-20">{detalles.overview}</p>

          <div className="md:flex my-5">
            {detalles.genres?.map(genre => (
              <div className="flex items-center text-green-700 hover:text-red-800" key={genre.id}>
                <ion-icon name="square"></ion-icon>
                <Link to={`/categorias/${genre.name}/${genre.id}`} className="text-white mr-3 ml-2 hover:text-red-800">{genre.name}</Link>
              </div>
            ))}
          </div>
        </div>


      </section>
      <div className="px-5 mb-5">
        <h2 className="text-white font-semibold text-3xl mb-4">Recomendados</h2>
        <article className="overflow-x-auto overflow-y-hidden whitespace-nowrap h-[300px] w-full pl-5 *:mx-2 *:my-2 *:inline-block">

          {
            recomendados.results?.map((movie) => (
              <div key={movie.title} className='w-[150px] h-[250px]'>
                <Link to={`/detalles/${movie.title}/${movie.id}`}>
                  <LazyLoadImage src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}
                    placeholderSrc={placeholder}
                    width={150}
                    height={250}
                    effect="blur"
                  />

                </Link>
              </div>))
          }

        </article>
      </div>
      <Footer />

    </>
  );
};

export { Detalles };