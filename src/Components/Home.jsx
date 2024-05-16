import React from "react";
import { Header } from "./Header/Header";
import { InputSearch } from "./InputSearch/InputSearch";
import { Tendencias } from "./Tendencias/Tendencias";
import { Footer } from "./Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <InputSearch />
      <Tendencias />
      <Footer />
    </>

  );
};

export { Home };