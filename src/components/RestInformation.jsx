import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";

export const RestInformation = () => {
  return (
    <div className="text-white space-y-8 mt-16">
      <div>
        <div>
          <div className="mt-6 space-y-4">
            <p className="font-bold text-pink-400">
              ¿Querés conocer la grilla de artistas de Festival Bandera 2025
              antes que nadie?
            </p>
            <p>
              Comprando tus entradas sector campo en preventa hasta el
              domingo 15 de junio, participás por accesos exclusivos al
              evento develación de la grilla 2025.
            </p>
            <p>
              Comprando tus entradas sector experiencia bandera en preventa
              hasta el domingo 15 de junio, ya tenés tu lugar asegurado para
              el evento develación de la grilla 2025.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="font-bold">
                Seguinos en redes y enterate más
              </span>
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
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">MENORES</h3>
        <div className="space-y-3">
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
