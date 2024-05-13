import React from "react";

function InputSearch() {
  return (
    <section className="mt-8 px-2 w-full md:mt-[14rem]">
      <label className="flex flex-col w-full ">
        <span className="text-DarkBlue text-2xl font-semibold">Búsqueda</span>
        <div className="flex items-center relative">
          <input type="search" name="search" placeholder="Busca tu película favorita"
            className="text-lg border-2 border-LightGreen bg-LightBlue rounded-lg  w-full mt-3 outline-none focus:border-LightBlue focus:bg-LightGreen py-2 pr-10 pl-2 placeholder:text-white cursor-pointer"
          />
          <div className="absolute right-3 text-3xl top-5 text-red-600">
            <ion-icon name="search-outline"
              className=""
            ></ion-icon>
          </div>
        </div>
      </label>
    </section>
  );
};

export { InputSearch };