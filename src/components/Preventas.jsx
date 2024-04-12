import { useContext, useEffect, useState } from "react";
import { CardsHorario } from "./CardsHorario";
import { BotonComprar } from "./";
import { getEnvVariables } from "../helpers/getEnvVariables";
import { InfoContext } from "../context/InfoProviders";

const { VITE_DATE, VITE_ID_VENTA } = getEnvVariables();
// const pruebaDateToCompare = "Wed Jul 5 2023 10:00:00 GMT-0300"

// const dateToCompare = new Date(pruebaDateToCompare);
const dateToCompare = new Date(VITE_DATE);

export const Preventas = () => {
  const [button, setButton] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);

  // const { isLoading, time } = useContext(InfoContext);

  // useEffect(() => {
  //   if (button === true) return;
  //   const getData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch(VITE_API_GEO);
  //       if (!response.ok) {
  //         setTime(new Date());
  //         return;
  //       }
  //       const data = await response.json();
  //       const currentDateTime = new Date(data.datetime);
  //       setTime(currentDateTime);
  //     } catch (error) {
  //       setTime(new Date());
  //       throw new Error(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   getData();
  // }, [button]);

  useEffect(() => {
    if (time === 0 || button === true) return;
    // console.log('wuef worker')

    const worker = new Worker(
      new URL("/src/helpers/countdownWorker.js", import.meta.url)
    );

    worker.onmessage = (event) => {
      // console.log('worker')
      const {
        dias,
        horas,
        minutos,
        segundos,
        button: countdownButton,
      } = event.data;
      setDays(dias);
      setHours(horas);
      setMinutes(minutos);
      setSeconds(segundos);
      setButton(countdownButton);
    };
    // console.log('post worker')
    worker.postMessage({ dateToCompare, newTime: time.getTime() });

    return () => {
      // console.log('return worker')
      worker.terminate();
    };

    // const intervalo = interval.current;
    // startTimer();
    // return () => clearInterval(intervalo);
  }, [time]);

  // if (isLoading) return <span></span>;

  return (
    <section className="text-white container mx-auto pt-10">
      <div className="flex flex-col items-center justify-center  lg:gap-9 md:border-2 border-white lg:p-10 p-2 ">
        <h3 className="text-2xl lg:text-4xl mb-3 lg:mb-0 text-center font-bold py-10">
          8 JUNIO | ESTADIO ÚNICO DE LA PLATA
        </h3>

        {!button && (
          <>
            <div>
              {/* <h3 className="text-2xl lg:text-4xl text-center">16 de septiembre</h3> */}
              <div className="flex pt-5 justify-center px-2 gap-1 ">
                <CardsHorario texto={"Día"} num={days} />
                <CardsHorario texto={"Hs"} num={hours} />
                <CardsHorario texto={"Min"} num={minutes} />
                <CardsHorario texto={"Seg"} num={seconds} />
              </div>
            </div>
          </>
        )}

        {button && (
          <BotonComprar
            href={`${VITE_ID_VENTA}`}
          />
        )}
      </div>

      {/* Código comentado */}
      {/* {button ? (
        <BotonComprar />
      ) : (
        <BotonProximamente />
      )} */}

      <section className="text-white p-5 container mx-auto  ">
        <div className="my-5">
          <div className="space-y-5">
            <p className="text-base lg:text-lg">
              Recordá que los datos de la cuenta y la tarjeta de crédito/débito
              deben coincidir. <br /> <br />
              No es necesario actualizar la página una vez que finalice el
              contador.
            </p>
              <hr className="border border-white" />
            
              <br />
             
            {/* <a
              target="_new"
              className={` bg-transparent border-white border hover:bg-white hover:text-black  text-base text-white py-2 px-5  md:px-10 rounded-full`}
              href="https://tuentrada.com/concierto/faa/plano.png"
              rel="noreferrer"
            >
              Ver Ubicaciones
            </a> */}
            
            {/* <p className="text-base lg:text-lg">
              Preventa exclusiva tarjeta Santander American Express: Miércoles
              5/7 - 10:00 hs – durante 48 hs o hasta agotar stock.
              <br />
              <br />
              Hasta 6 cuotas sin interés.
              <br />
              <br />
              Finalizada la preventa comenzará la venta general.
            </p> */}
            {/* <a
              target="_new"
              href="https://www.instagram.com/stories/highlights/18392541697005748/"
              rel="noreferrer"
            >
              {" "}
              <img
                className="w-[200] md:sm:w-[200px] lg:w-[40%] xl:w-[35%]"
                src="https://tuentrada.com/concierto/ysy-a/preventa.webp"
                alt="preventa ysy a"
              />
            </a> */}
            {/* <h3 className="text-2xl lg:text-4xl py-10">
              Ubicaciones y precios
            </h3> */}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center text-center my-10">
          <img
            className="block"
            src="https://tuentrada.com/concierto/faa/plano.png"
            alt="plano Arjona"
          />
       
        </div>
      </section>
    </section>
  );
};
