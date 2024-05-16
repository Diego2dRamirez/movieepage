import React, { useEffect, useState } from "react";
import { Categorias } from "../Categorias/Categorias";

function NavBar() {
  // const [categorias, setCategorias] = useState([])

  // useEffect(() => {
  //   fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=639ffac191a35e90345c4e5e6f416515')
  //     .then(response => response.json())
  //     .then(data => setCategorias(data))
  // }, []);

  // console.log(categorias);
  // console.log(categorias.genres);
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div onClick={() => setOpen(!open)}
        className="text-3xl text-LightBlue cursor-pointer md:hidden "
      >
        <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
      </div>
      <section className={`pb-12 absolute bg-LightBlue z-[-1] left-0 w-full px-9  border-t-8 border-white ${open ? 'top-15 opacity-100' : 'top-[-50px] hidden'}  md:flex md:pb-6 md:pl-0 md:p-3 md:mt-[6.2rem] shadow-xl md:border-none
      md:flex-col
        `}>
        <h2 className="p-5 text-DarkBlue text-2xl font-semibold italic text-center md:text-start">Categorías</h2>
        <Categorias />
      </section>
    </nav>
  );
};


export { NavBar };


{/* <NavLink to={name.to} */ }