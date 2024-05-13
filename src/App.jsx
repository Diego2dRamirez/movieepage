// import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './Components/Header/Header'

function App() {

  // const [ movie , setMovie ] = useState([])

  // useEffect(() => {
  //   fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=639ffac191a35e90345c4e5e6f416515')
  // .then(response => response.json())
  // .then(data => setMovie(data))
  // }, [setMovie]);

          {/* {movie.results?.map((element) => (
           <div key={element.id}><h1>{element.title}</h1>
           <img src={`https://image.tmdb.org/t/p/w300${element.poster_path}`} alt="" />
           </div>
          ))} */}

  // console.log(movie);
  // console.log(movie.results);

  return (
    <>
      <Header />
    </>
  )
}

export default App
