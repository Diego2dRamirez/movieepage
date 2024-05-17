import React, { useState } from "react";
import { Link } from "react-router-dom";

function InputSearch() {

  const [valueInput, setValueInput] = useState('');

  const handleValueInput = (e) => {
    setValueInput(e.target.value)
  }

  return (
    <section className="mt-8 px-2 w-full md:mt-[14rem] md:w-1/2">
      <label className="flex flex-col w-full ">
        <span className="text-DarkBlue text-2xl font-semibold">Búsqueda</span>
        <div className="flex items-center relative mt-5">

          <input type="search" name="search" placeholder="Busca tu película favorita"
            className="text-lg border-2 border-LightGreen bg-LightBlue w-full outline-none rounded-tl-lg rounded-bl-lg focus:border-LightBlue focus:bg-LightGreen py-2 pr-10 pl-2 placeholder:text-white cursor-pointer"
            onChange={handleValueInput}
          />
          <Link to={`/busqueda/${valueInput}`}>
            <div className="text-3xl text-red-600 flex items-center bg-LightBlue rounded-tr-lg rounded-br-lg h-[3rem] hover:bg-LightGreen cursor-pointer">
              <ion-icon name="search-outline"
              ></ion-icon>
            </div>
          </Link>

        </div>
      </label>
    </section>
  );
};

export { InputSearch };