import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";

export const RestInformation = () => {
  return (
    <div className="text-white mt-16">
      <div className=" rounded-lg text-center border-2 border-white mb-6 p-6">
        <h3 className="text-[#FA69D3] text-xl lg:text-3xl font-bold">
          ¿Querés conocer la grilla de artistas de Festival Bandera 2025 antes
          que nadie?
        </h3>
        <ul className="list-disc mt-5 text-left pl-6">
          <li className="mb-4 md:mb-0">
            Comprando tus entradas Online sector <strong>CAMPO</strong> en preventa
            hasta el domingo 15 de junio, participás por accesos exclusivos al
            evento develación de la grilla 2025.
          </li>
          <li>
            Comprando tus entradas Online sector <strong>EXPERIENCIA BANDERA</strong>{" "}
            en preventa hasta el domingo 15 de junio, ya tenés tu lugar
            asegurado para el evento develación de la grilla 2025.
          </li>
        </ul>
        <div className="flex flex-row items-center justify-center gap-2 mt-4 text-sm md:text-base flex-wrap">
          <span className="font-bold">Seguinos en redes y enterate más</span>
          <a
            href="https://www.instagram.com/festivalbanderaok/?hl=es"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-400"
          >
            <GrInstagram size={22} />
          </a>
          <a
            href="https://www.facebook.com/festivalbanderaok"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-400"
          >
            <FaFacebook size={22} />
          </a>
        </div>
      </div>
      {/* <div className="space-y-4">
        <p className="font-bold text-pink-400 text-center text-2xl">
          ¿Querés conocer la grilla de artistas de Festival Bandera 2025 antes
          que nadie?
        </p>
        <ul className="list-disc pl-6">
          <li>
            Comprando tus entradas sector <strong>CAMPO</strong> en preventa
            hasta el domingo 15 de junio, participás por accesos exclusivos al
            evento develación de la grilla 2025.
          </li>
          <li>
            Comprando tus entradas sector <strong>EXPERIENCIA BANDERA</strong>{" "}
            en preventa hasta el domingo 15 de junio, ya tenés tu lugar
            asegurado para el evento develación de la grilla 2025.
          </li>
        </ul>
        <div className="flex items-center gap-2 mt-2">
          <span className="font-bold">Seguinos en redes y enterate más</span>
          <a
            href="https://www.instagram.com/festivalbanderaok/?hl=es"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-400"
          >
            <GrInstagram size={22} />
          </a>
          <a
            href="https://www.facebook.com/festivalbanderaok"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-400"
          >
            <FaFacebook size={22} />
          </a>
        </div>
      </div> */}

      <div className="mt-24">
        <h3 className="font-bold mb-4 text-sm">PUNTO DE VENTA FÍSICO</h3>
        <div>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            Amadeus - Córdoba 1369 L.9 (Con descuento - Solo Efectivo)
          </p>
          
        </div>
      </div>
      <div className="mt-16">
        <h3 className="font-bold mb-4 text-sm">MENORES</h3>
        <div>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            Pueden ingresar menores a partir de 5 años (inclusive) con su
            respectiva entrada y acompañados por su padre/madre o tutor
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            Menores de 5 años no pueden ingresar
          </p>
        </div>
      </div>
    </div>
  );
};
