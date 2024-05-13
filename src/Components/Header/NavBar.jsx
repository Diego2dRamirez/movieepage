import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";


function NavBar() {

  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div onClick={() => setOpen(!open)}
      className="text-3xl text-LightBlue cursor-pointer md:hidden "
      >
        <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
      </div>
      <section className={`pb-12 absolute bg-LightBlue z-[-1] left-0 w-full px-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-20px]'} opacity-0 md:opacity-100 md:pb-6 md:pl-0 md:p-3 md:mt-[5rem] shadow-2xl
        `}>
        <h2 className="p-5 text-white text-2xl font-semibold italic text-center">Categorías</h2>
        <ul className="md:flex md:flex-wrap md:p-3 text-xl *:m-2 text-white *:cursor-pointer capitalize">
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
        </ul>
       </section>
    </nav>
  );
};


export { NavBar };