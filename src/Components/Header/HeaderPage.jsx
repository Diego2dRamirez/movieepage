import React from "react";
import BlueLong2 from '../../assets/blue_long_2.svg';
import { useNavigate } from "react-router-dom";


function HeaderPage(props) {
  const navigate = useNavigate();
  const regresar = () => {
    navigate(-1)
  }
  const paginaPrincial = () => {
    navigate('/')
  }

  return (
    <section className="bg-DarkBlue text-white p-5 text-3xl w-full fixed z-10">
      <div className="flex justify-between items-center w-full px-0 md:px-10 mb-5">
        <span onClick={() => regresar()} className="cursor-pointer flex items-center">
          <ion-icon name="chevron-back-outline"></ion-icon>
        </span>
        <img onClick={() => paginaPrincial()} src={BlueLong2} alt="BlueLong2" className="w-52 md:w-60 cursor-pointer" />
      </div>
      <h2 className="text-center">{props.title}</h2>
    </section>
  );
};

export { HeaderPage };