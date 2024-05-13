import React from "react";
import blueLong1 from '../../assets/blue_long_1.svg'
import { NavBar } from "./NavBar";

function Header(){
    return(
      <header className="bg-DarkBlue w-full p-3 flex justify-between items-center shadow-2xl relative z-20 top-0 left-0 md:flex-col md:items-start md:shadow-none">
        <img className="w-40 md:w-80" src={blueLong1} alt="" />
        <NavBar />
      </header>
    );
};

export { Header };