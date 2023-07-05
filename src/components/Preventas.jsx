import { useContext, useEffect, useRef, useState } from "react";
import { CardsHorario } from "./CardsHorario";
import { BotonComprar } from "./";
import { getEnvVariables } from "../helpers/getEnvVariables";
import { InfoContext } from "../context/InfoProviders";

const { VITE_DATE } = getEnvVariables();

const dateToCompare = new Date(VITE_DATE);

export const Preventas = () => {
  const [button, setButton] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  let interval = useRef();

  const { isLoading, time } = useContext(InfoContext);



  useEffect(() => {
    if(time === false) return
    const intervalo = interval.current;
    startTimer();
    return () => clearInterval(intervalo);
  }, [time]);

  const startTimer = () => {
    let newTime = time.getTime();

    interval = setInterval(() => {
      const difference = dateToCompare.getTime() - newTime;
      const dias = Math.floor(difference / (1000 * 60 * 60 * 24))
        .toString()
        .padStart(2, "0");

      const horas = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
        .toString()
        .padStart(2, "0");

      const minutos = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, "0");

      const segundos = Math.floor((difference % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, "0");

      if (difference < 0) {
        clearInterval(interval);
        setButton(true);
      } else {
        newTime = newTime + 1000;
        setDays(dias);
        setHours(horas);
        setMinutes(minutos);
        setSeconds(segundos);
      }
    }, 1000);
  };

  if (isLoading) return <span></span>;

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
                Anticipate: Registrate o actualiza tus datos haciendo
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
              Preventa exclusiva tarjeta Santander American Express: Miercoles
              5/7 - 10:00 hs – durante 48 hs o hasta agotar stock.
              <br />
              <br />
              Hasta 6 cuotas sin interes.
              <br />
              <br />
              Finalizada la preventa comenzara la venta general.
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
