import { useState } from "react";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
// import { useContext, useEffect, useState } from "react";
// import { CardsHorario } from "./CardsHorario";
import { BotonComprar } from "./";
// import { getEnvVariables } from "../helpers/getEnvVariables";
// import { InfoContext } from "../context/InfoProviders";

// const { VITE_DATE, VITE_ID_VENTA } = getEnvVariables();
// const pruebaDateToCompare = "Wed Jul 5 2023 10:00:00 GMT-0300"

// const dateToCompare = new Date(pruebaDateToCompare);
// const dateToCompare = new Date(VITE_DATE);

export const Preventas = () => {
  const [button] = useState(true);
  // const [button, setButton] = useState(true);
  // const [days, setDays] = useState(0);
  // const [hours, setHours] = useState(0);
  // const [minutes, setMinutes] = useState(0);
  // const [seconds, setSeconds] = useState(0);
  // const [time, setTime] = useState(new Date());
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   if (time === 0 || button === true) return;
  //   // console.log('wuef worker')

  //   const worker = new Worker(
  //     new URL("/src/helpers/countdownWorker.js", import.meta.url)
  //   );

  //   worker.onmessage = (event) => {
  //     // console.log('worker')
  //     const {
  //       dias,
  //       horas,
  //       minutos,
  //       segundos,
  //       button: countdownButton,
  //     } = event.data;
  //     setDays(dias);
  //     setHours(horas);
  //     setMinutes(minutos);
  //     setSeconds(segundos);
  //     setButton(countdownButton);
  //   };
  //   // console.log('post worker')
  //   worker.postMessage({ dateToCompare, newTime: time.getTime() });

  //   return () => {
  //     // console.log('return worker')
  //     worker.terminate();
  //   };

  //   // const intervalo = interval.current;
  //   // startTimer();
  //   // return () => clearInterval(intervalo);
  // }, [time]);

  // if (isLoading) return <span></span>;

  return (
    <section className="text-white container mx-auto pt-10">
      {/* Fecha y Ubicación */}
      <div
        id="comprar"
        className=" flex flex-col items-center justify-center rounded-lg text-center border-2 border-white p-6 lg:p-10 mb-6"
      >
        <h3 className="text-xl lg:text-3xl font-bold">
          Sábado 1 de Noviembre - 14:30 Horas
        </h3>
        <h3 className="text-xl lg:text-3xl font-bold mt-2">
          Hipódromo de Rosario
        </h3>

        <div className="w-full max-w-sm mx-auto space-y-4 mt-10">
          {button && (
            <BotonComprar
              label="Comprar Entradas"
              href="https://bandera.tuentrada.com/secured/selection/event/date?productId=10229134082473"
            />
          )}
        </div>
      </div>

      {/* Botones de Compra */}

      {/* Line Up del Festival */}
      <section
        id="lineup"
        className="text-white py-5  md:py-20 container mx-auto flex flex-col md:flex-row justify-between items-center"
      >
        {/* Imagen del Line-Up (40%) */}
        <div className="w-full md:w-[35%]  hidden lg:block">
          <img
            src="https://tuentrada.com/experiencia/festival-bandera/line-up-image1.jpg"
            alt="Festival Bandera Line Up"
            className="w-full h-auto rounded-lg shadow-md "
          />
        </div>

        {/* Texto del Line-Up (60%) */}
        <div className="w-full md:w-[65%] mt-5 mb-2 md:my-4 lg:my-8 md:pl-8 text-left">
          <h2 className="text-2xl lg:text-3xl font-bold py-3">
            Llega la sexta edición del Festival Bandera a Rosario
          </h2>
          <p className="text-base leading-relaxed mb-4">
            <strong>Preventa Banco Santa Fe:</strong> desde el{" "}
            <span className="font-medium">miércoles 4/06 a las 12:00hs</span>
            <br />
            <strong>Venta General:</strong> desde el{" "}
            <span className="font-medium">viernes 6/06 a las 12:00hs</span>
          </p>
          <ul className="text-base leading-relaxed space-y-1">
            <li>
              <strong className="underline">Lugar:</strong> Hipódromo de Rosario
            </li>
            <li>
              <strong className="underline">Ciudad:</strong> Rosario
            </li>
            <li>
              <strong className="underline">Fecha:</strong> 1 de noviembre de 2025
            </li>
            <li>
              <strong className="underline">Hora:</strong> 14:30 hs
            </li>

            <li>
              <strong className="underline">Edad mínima de ingreso:</strong> Desde los 5 años
            </li>
            <li>
              <strong className="underline">Dirección:</strong> Parque
              Independencia
            </li>
          </ul>
          <div className="flex items-center mt-1">
            <GrInstagram />
            <h3 className="font-semibold underline ml-1">
              <a
                href="https://www.instagram.com/festivalbanderaok/?hl=es"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>{" "}
            </h3>
          </div>
          <div className="flex items-center mt-1">
            <FaFacebook />
            <h3 className="font-semibold underline ml-1">
              <a
                href="https://www.instagram.com/festivalbanderaok/?hl=es"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>{" "}
            </h3>
          </div>
        </div>
      </section>
    </section>
  );
};
