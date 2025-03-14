import { useState } from "react";
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
  <div id="comprar" className=" flex flex-col items-center justify-center rounded-lg text-center border-2 border-white p-6 lg:p-10 mb-6">
    <h3 className="text-xl lg:text-3xl font-bold">
    Sábado 5 de Abril - 16:00 Horas
    </h3>
    <h3 className="text-xl lg:text-3xl font-bold mt-2">
      Lomas del Malbec, Luján de Cuyo, Mendoza
    </h3>
  </div>

  {/* Botones de Compra */}
  <div className="flex flex-col items-center justify-center rounded-lg border-2 border-white p-6 lg:p-10">
    <div className="w-full max-w-md mx-auto space-y-4">
      {button && (
        <BotonComprar
          label="Comprar Entrada"
          href="https://bbva1.tuentrada.com/selection/event/date?productId=10229100130616&_gl=1*1puns8l*_gcl_au*MTI4MDgwMDUwNS4xNzQxODk5MDAzLjEzMjI0Mjg4NDYuMTc0MTg5OTA5Mi4xNzQxODk5MDky*_ga*MzU0OTQ4MDI1LjE3NDE4OTkwMDM.*_ga_K2KT0GJC8Q*MTc0MTk1OTQ4NS4zLjAuMTc0MTk1OTQ4OC41Ny4wLjEzNjIwODEyODU."
        />
      )}
      {button && (
        <BotonComprar
          label="Comprar Estacionamiento"
          href="https://bbva1.tuentrada.com/selection/event/date?productId=10229105144558&_gl=1*yzbnnh*_gcl_au*MTI4MDgwMDUwNS4xNzQxODk5MDAzLjEzMjI0Mjg4NDYuMTc0MTg5OTA5Mi4xNzQxODk5MDky*_ga*MzU0OTQ4MDI1LjE3NDE4OTkwMDM.*_ga_K2KT0GJC8Q*MTc0MTk1OTQ4NS4zLjEuMTc0MTk1OTU3NS40Ny4wLjEzNjIwODEyODU."
        />
      )}
    </div>
  </div>

  {/* Line Up del Festival */}
  <section id="lineup" className="text-white py-20 container mx-auto flex flex-col md:flex-row justify-between items-center">
    
    {/* Imagen del Line-Up (40%) */}
    <div className="w-full md:w-[35%]">
      <img
        src="https://tuentrada.com/experiencia/wine-rock/line-up-image.png"
        alt="Wine Rock Line Up"
        className="w-full h-auto rounded-lg shadow-md"
      />
    </div>

    {/* Texto del Line-Up (60%) */}
    <div className="w-full md:w-[65%] my-5 lg:my-8 md:pl-8 text-center md:text-left">
  <h2 className="text-2xl lg:text-3xl font-bold py-3">
  ¡Conocé el Line Up de Wine Rock!
  </h2>
  <p className="text-base leading-relaxed ">
    El Festival Wine Rock 2025 contará con la actuación de artistas nacionales e internacionales. Destacan la mexicana <strong>Julieta Venegas</strong>, <strong>El Kuelgue</strong>, <strong>Conociendo Rusia</strong>, <strong>Javier Malosetti</strong>, <strong>Chechi De Marcos</strong>, <strong>Feli Ruiz</strong>, además del <strong>Jazz and Blues Club</strong> con el estadounidense <strong>Lorenzo Thompson</strong>, el brasilero <strong>Bruno Marques</strong>, <strong>Denise Izaguirre</strong> y la <strong>Willy Blues Band</strong>. También habrá una participación especial del DJ francés <strong>Sébastien Léger</strong>.
  </p>
  <p className="py-4 text-base leading-relaxed">
  La edición 2025 promete ser una celebración de música en todas sus formas al pie de la Cordillera de Los Andes. Tendrá dos escenarios y distintas actividades que completan la experiencia. Habrá un sector gastronómico exclusico, cata de vinos, maridaje con platos diseñados para la ocasión, experiencias inmersivas en el mundo del vino y la música, entre otras propuestas adicionales. 
  </p>
</div>


  </section>

</section>

  );
};
