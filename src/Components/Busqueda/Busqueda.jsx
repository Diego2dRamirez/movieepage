import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BlueLong2 from '../../assets/blue_long_2.svg';
import { Footer } from "../Footer/Footer";

function Busqueda() {

  const { value } = useParams()

  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${value}&api_key=639ffac191a35e90345c4e5e6f416515`)
      .then(res => res.json())
      .then(data => setSearch(data))
  }, []);

  console.log(search);

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
        <h1 className="text-center">Busqueda de : <span> {value} </span> </h1>
      </div>
      <section className="flex flex-wrap w-full">
        {
          search.results?.map(movie => (
            <article key={movie.id} className="w-full bg-LightBlue flex flex-col items-center py-10 md:w-1/2">
              <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className="rounded-lg mb-2"
              />
              <p className="text-2xl text-DarkBlue font-semibold text-center px-3">{movie.title}</p>
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