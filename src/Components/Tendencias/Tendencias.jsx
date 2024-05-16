import { useEffect, useState } from 'react'

function Tendencias() {
  const [movies, setMovie] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=639ffac191a35e90345c4e5e6f416515')
      .then(response => response.json())
      .then(data => setMovie(data))
  }, [setMovie]);

  // console.log(movies);
  // console.log(movies.results);
  const handleDetalles = (title) => {
    alert(title)
  }
  return (
    <section className="w-full mt-10 pl-4 mb-[3.5rem]">
      <h3 className="text-2xl text-DarkBlue font-semibold italic mb-5">Tendencias</h3>
      <article className="overflow-x-auto overflow-y-hidden whitespace-nowrap h-[300px] w-full pl-5 *:mx-2 *:my-2 *:inline-block">
        {
          movies.results?.map((movie) => (
            <div key={movie.title} className='w-[150px] h-[250px]'>
              <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="" 
              onClick={() => handleDetalles(movie.title)}
              />

            </div>))
        }

      </article>
    </section>
  );
};

export { Tendencias };