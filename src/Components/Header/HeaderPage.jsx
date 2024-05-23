import React from "react";
import BlueLong2 from '../../assets/blue_long_2.svg';
import { useNavigate } from "react-router-dom";


function HeaderPage(props){
  const navigate = useNavigate();
  const regresar = () => {
    navigate(-1)
  }

    return(
      <section className="bg-DarkBlue text-white p-5 text-3xl w-full fixed z-10">
      <span onClick={() => regresar()} className="cursor-pointer flex justify-between items-center px-10 w-full"><ion-icon name="chevron-back-outline"></ion-icon>
        <img src={BlueLong2} alt="BlueLong2" className="w-52 md:w-60" />
      </span>
      <h2 className="text-center">{props.title}</h2>
    </section>
    );
};

export { HeaderPage };