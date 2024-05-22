import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BlueLong2 from '../../assets/blue_long_2.svg';
import { Footer } from "../Footer/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeholder from '../../assets/placeholder-image.png'
import 'react-lazy-load-image-component/src/effects/blur.css'

function SubCategorias() {
  const { id, name } = useParams();

  const [subCategorias, setSubCategorias] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&api_key=639ffac191a35e90345c4e5e6f416515`)
      .then(response => response.json())
      .then(data => setSubCategorias(data))
  }, []);

  const navigate = useNavigate();
  const regresar = () => {
    navigate("/")
  }

  return (
    <>
      <div className="bg-DarkBlue text-white p-5 text-3xl w-full">
        <span onClick={() => regresar()} className="cursor-pointer flex justify-between items-center px-10 w-full"><ion-icon name="chevron-back-outline"></ion-icon>
          <img src={BlueLong2} alt="BlueLong2" className="w-52 md:w-60" />
        </span>
        <h1 className="text-center">{name}</h1>
      </div>
      <section className="flex flex-wrap w-full">

        {
          subCategorias.results?.map(subcategoria => (
            <article key={subcategoria.id} className="w-full bg-LightBlue flex flex-col items-center py-10 md:w-1/2">

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