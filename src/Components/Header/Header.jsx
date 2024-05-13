import React from "react";
import blueLong1 from '../../assets/blue_long_1.svg'
import { NavBar } from "./NavBar";

function Header(){
    return(
      <header className="bg-DarkBlue w-full h-24 p-3 flex justify-between items-center shadow-lg fixed top-0 left-0 md:flex-col md:items-start">
        <img className="w-40 md:w-80" src={blueLong1} alt="" />
        <NavBar />
      </header>
    );
};

export { Header };