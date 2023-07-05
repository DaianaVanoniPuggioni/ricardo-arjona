import { useContext, useEffect, useState } from "react";
import { CardsHorario } from "./CardsHorario";
import { BotonComprar } from "./";
import { getEnvVariables } from "../helpers/getEnvVariables";
import { InfoContext } from "../context/InfoProviders";

const { VITE_DATE, VITE_API_GEO } = getEnvVariables();
// const pruebaDateToCompare = "Wed Jul 5 2023 10:00:00 GMT-0300"

// const dateToCompare = new Date(pruebaDateToCompare);
const dateToCompare = new Date(VITE_DATE);

export const Preventas = () => {
  const [button, setButton] = useState(true);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // const { isLoading, time } = useContext(InfoContext);

  useEffect(() => {
    if(button === true) return
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(VITE_API_GEO);
        if (!response.ok) {
          setTime(new Date());
          return;
        }
        const data = await response.json();
        const currentDateTime = new Date(data.datetime);
        setTime(currentDateTime);
      } catch (error) {
        setTime(new Date());
        throw new Error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [button]);


  useEffect(() => {
    if (time === 0) return
    // console.log('wuef worker')

    const worker = new Worker(new URL("/src/helpers/countdownWorker.js", import.meta.url));

    worker.onmessage = (event) => {
      // console.log('worker')
      const { dias, horas, minutos, segundos, button: countdownButton } = event.data;
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
      <h3 className="text-2xl lg:text-4xl text-center pb-5">
        Preventa exclusiva tarjeta Santander American Express
      </h3>

      {!button ? (
        <>
          <div className="bg-contador pt-7">
            <h3 className="text-2xl lg:text-4xl text-center">Próximamente</h3>
            <div className="flex pt-5 justify-center px-2">
              <CardsHorario texto={"Día"} num={days} />
              <CardsHorario texto={"Hora"} num={hours} />
              <CardsHorario texto={"Min"} num={minutes} />
              <CardsHorario texto={"Seg"} num={seconds} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex pt-5 justify-center px-2">
            <BotonComprar />
          </div>
        </>
      )}

      {/* Código comentado */}
      {/* {button ? (
        <BotonComprar />
      ) : (
        <BotonProximamente />
      )} */}

      <section className="text-white p-5 container mx-auto  lg:py-10">
        <div className="my-5">
          <div className="space-y-10">
            <p className="text-base lg:text-lg">
              Recordá que los datos de la cuenta y la tarjeta de crédito/débito
              deben coincidir. <br /> <br />
              No es necesario actualizar la página una vez que finalice el
              contador. <br />
              <br />
              <strong>
                Anticipate: Registrate o actualizá tus datos haciendo
                <a
                  target="blank"
                  className="underline inline-block ml-1 hover:text-gray-300"
                  href="https://wallet.tuentrada.com/account/login"
                >
                  CLICK AQUÍ
                </a>{" "}
                <br /> <br />
              </strong>
            </p>
            <hr className="border border-white" />
            <p className="text-base lg:text-lg">
              Preventa exclusiva tarjeta Santander American Express: Miércoles
              5/7 - 10:00 hs – durante 48 hs o hasta agotar stock.
              <br />
              <br />
              Hasta 6 cuotas sin interés.
              <br />
              <br />
              Finalizada la preventa comenzará la venta general.
            </p>
            <img
              style={{ width: "400px" }}
              src="https://tuentrada.com/concierto/ricardo-arjona/santander-amex.png"
              alt=""
            />
            <h3 className="text-2xl lg:text-4xl py-10">
              Ubicaciones y precios
            </h3>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center text-center my-10">
          <img
            className="block sm:hidden"
            src="https://tuentrada.com/concierto/ricardo-arjona/mapa-celularv2.png"
            alt="plano Arjona"
          />
          <img
            className="hidden sm:block w-screen lg:hidden"
            src="https://tuentrada.com/concierto/ricardo-arjona/mapa-tabletv2.png"
            alt="plano Arjona"
          />
          <img
            className="hidden  lg:block w-screen"
            src="https://tuentrada.com/concierto/ricardo-arjona/mapa-computadorav2.png"
            alt="plano Arjona"
          />
        </div>
      </section>
    </section>
  );
};
