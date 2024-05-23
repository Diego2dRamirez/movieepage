import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import placeholder from '../../assets/placeholder-image.png'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { HeaderPage } from "../Header/HeaderPage";

function Detalles() {

  const { title, titleId } = useParams();


  const [detalles, setDetalles] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${titleId}?api_key=639ffac191a35e90345c4e5e6f416515`)
      .then(response => response.json())
      .then(data => setDetalles(data))
  }, []);

  console.log(detalles);

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
        </div>

      </section>
      <Footer />

    </>
  );
};

export { Detalles };