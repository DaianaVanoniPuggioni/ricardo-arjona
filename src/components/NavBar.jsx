import { useState } from "react";
import { Menu, X } from "lucide-react"; // Iconos para el menú

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-30 bg-black shadow-md">
      {/* Navbar Superior */}
      <div className="flex justify-between items-center px-5 py-4 lg:py-3 max-w-screen-xl mx-auto">
        {/* Logo */}
        <a href="https://tuentrada.com/" target="_blank" rel="noreferrer" className="flex items-center">
          <img
            style={{ width: "180px" }}
            src="https://www.tuentrada.com/img/logo_tuboleta_menu.svg"
            className="h-15 mr-3"
            alt="Logo TuEntrada"
          />
        </a>

        {/* Botón de Menú (Mobile) */}
        <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Menú en Pantallas Grandes */}
        <ul className="hidden lg:flex space-x-6 text-white text-base leading-relaxed">
          <li><a href="#comprar" className="hover:text-gray-300">Comprar Entradas</a></li>
          <li><a href="#lineup" className="hover:text-gray-300">Información</a></li>
          <li><a href="#legales" className="hover:text-gray-300">Promociones Bancarias</a></li>
          {/* <li><a href="#tickets" className="hover:text-gray-300">Opciones de Ticket</a></li> */}
          {/* <li><a href="#experiencia" className="hover:text-gray-300">Experiencias</a></li> */}
          {/* <li><a href="#info" className="hover:text-gray-300">Más Información</a></li> */}
        </ul>
      </div>

      {/* Menú Desplegable Mobile */}
      {menuOpen && (
        <div className="lg:hidden bg-black w-full absolute top-full left-0 shadow-md">
          <ul className="flex flex-col text-white text-center py-4">
            <li className="py-2"><a href="#comprar" onClick={() => setMenuOpen(false)}>Comprar</a></li>
            <li className="py-2"><a href="#lineup" onClick={() => setMenuOpen(false)}>Gacetilla</a></li>
            {/* <li className="py-2"><a href="#tickets" onClick={() => setMenuOpen(false)}>Opciones de Ticket</a></li> */}
            {/* <li className="py-2"><a href="#experiencia" onClick={() => setMenuOpen(false)}>Experiencias</a></li> */}
            {/* <li className="py-2"><a href="#info" onClick={() => setMenuOpen(false)}>Más Información</a></li> */}
          </ul>
        </div>
      )}
    </nav>
  );
};
