import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Categorias() {
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=639ffac191a35e90345c4e5e6f416515')
      .then(response => response.json())
      .then(data => setCategorias(data))
  }, []);

  // console.log(categorias);
  //   console.log(categorias.genres);


  return (
    <ul className="md:flex md:flex-wrap md:p-3 md:px-6 text-xl *:mx-4  text-white *:cursor-pointer capitalize list-disc">
      {
        categorias.genres?.map((categoria) => (
          <li key={categoria.id}>
            <Link to={`/categorias/${categoria.name}/${categoria.id}`}>
              {categoria.name}
            </Link>
          </li>
        ))
      }
    </ul>

  );
};

export { Categorias };