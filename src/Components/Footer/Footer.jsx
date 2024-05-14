import React from "react";
import BlueSquare2 from '../../assets/blue_square_2.svg'
import FrontendMentor from '../../assets/frontend-mentor.png'


function Footer() {
  return (
    <footer className="w-full mt-10 flex flex-col items-center bg-DarkBlue text-white p-3 lg:flex-row lg:justify-evenly">
      <img src={BlueSquare2} alt="logo" className="w-36 mb-5" />

      <div className="mt-5">
        <p className="flex felx-col">
          API Proporcionada por :
          <a className="text-LightGreen underline" href="https://developer.themoviedb.org/reference/intro/authentication"> The Movie DB</a>
        </p>
        <p>
          Diseño Hecho Por :
          <span className="text-LightGreen"> Diego Ramírez de Diego</span>
        </p>
      </div>

      <div className="mt-5">
        <h3 className="font-semibold text-2xl">Repositorios</h3>
        <a href="https://github.com/Diego2Drm" className=" text-LightGreen underline flex items-center gap-x-5">
          <ion-icon name="logo-github"></ion-icon>
          Git-Hub
        </a>

        <a href="https://www.frontendmentor.io/profile/Diego2Drm" className="flex items-center gap-x-5 text-LightGreen underline">
          <img className="w-5" src={FrontendMentor} alt="frontend" />
          Fronend-Mentor
        </a>
      </div>

      <article className="mt-5">
        <p className="flex items-center gap-x-3">
          Correo:
          <ion-icon name="mail"></ion-icon>
          <span>diego.ramirez2d03gmail.com</span></p>
      </article>
    </footer>
  );
};

export { Footer };