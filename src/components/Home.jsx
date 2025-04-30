import { useEffect } from "react";
import { Header } from "./Header";
import { MainEvent } from "./MainEvent";
import { NavBar } from "./NavBar";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const { hash } = useLocation(); // Extraemos el hash directamente

  useEffect(() => {
    if (hash) {
     

      // Esperamos un pequeño tiempo para que el DOM termine de renderizar
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
        
          element.scrollIntoView({ behavior: "smooth" });
        } 
      }, 300); // Pequeño delay para asegurar que el DOM se cargó
    }
  }, [hash]); // Se ejecuta cada vez que cambia el hash

  return (
    <>
      <NavBar />
      <Header />
      <MainEvent />
    </>
  );
};
