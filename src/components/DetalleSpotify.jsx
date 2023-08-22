// import { SpotifyCard } from "./SpotifyCard";

export const DetalleSpotify = () => {
  return (
    <section className="text-white p-5 container mx-auto py-10 lg:py-10">
      <div className="text-white py-10 lg:py-10">
        <h3 className="text-2xl lg:text-4xl pb-10">
          Blanco y Negro <br />
          Volver… para decir adiós
        </h3>

        {/* <p className="text-base lg:text-lg">
          El cantautor cerrará su exitosa gira blanco y negro con un show único
          en el estadio Vélez Sarsfield
        </p> */}
        <p className="mt-3 mb-7 text-base lg:text-lg">
          Saliendo de la intimidad que propuso en sus 8 fechas en el Movistar
          Arena en 2022, llega en septiembre al estadio velez sarsfield con una
          contundente puesta en escena para despedir su exitoso blanco y negro
          tour. 
          Ésta será la última oportunidad para que el público argentino viva un
          concierto único. <br /><br /> Blanco y negro tour es un exito mundial tras dos años
          de gira con 160 conciertos entre europa, estados unidos y
          latinoamérica. <br />
          <br />
          Sin dudas Argentina es uno de los países más especiales para Ricardo
          Arjona y eso quedó en evidencia al ser elegido para cerrar una gira
          que lo tuvo recorriendo más de 110 ciudades a lo largo y a lo ancho
          del mundo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <img
            src="https://tuentrada.com/concierto/ricardo-arjona/img1.jpg"
            alt=""
          />
          <img
            src="https://tuentrada.com/concierto/ricardo-arjona/img2.jpg"
            alt=""
          />
          <img
            src="https://tuentrada.com/concierto/ricardo-arjona/img3.jpg"
            alt=""
          />
          <img
            src="https://tuentrada.com/concierto/ricardo-arjona/img4.jpg"
            alt=""
          />
        </div>

        <h3 className="text-2xl lg:text-4xl pb-10 pt-20 ">
          Escúchalas en Spotify
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-5">
          <div className="space-y-3">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/29csiYMOfBmLmGwxmISrMy?si=gzdoMyBETrq7XF7xEJUpgg"
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <hr className="border border-white" />
            <p className="text-base lg:text-lg">Fuiste Tú</p>
          </div>
          <div className="space-y-3">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/5UJsYyBi0CdSJl0ul5aTgO?si=VMex4087Ra2TanqDPBLmWw&nd=1"
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <hr className="border border-white" />
            <p className="text-base lg:text-lg">El Problema</p>
          </div>
          <div className="space-y-3">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/4qmXbnmZxZy9pavpf3YfP5?si=Xb6GyXcYTD2VMd-ZRrEqMg&nd=1"
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <hr className="border border-white" />
            <p className="text-base lg:text-lg">Historia de Taxi</p>
          </div>
          <div className="space-y-3">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/0Wxl17o9KY6lGdEgdHCxBN?si=gsvCnjEjRnOrLt5N37ouhQ&nd=1"
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <hr className="border border-white" />
            <p className="text-base lg:text-lg">Desnuda</p>
          </div>
        </div>

        <div className="text-white pt-10">
          <h3 className="text-2xl lg:text-4xl pb-10 pt-10">
            Conectá con Ricardo Arjona
          </h3>
          <p>
            Facebook:{" "}
            <a target="blank" href="https://www.facebook.com/arjonaoficial/">
              @ArjonaOficial
            </a>
            | 18 MILLONES de seguidores <br />
            Twitter:{" "}
            <a target="blank" href="https://twitter.com/Ricardo_Arjona">
              @Ricardo_Arjona{" "}
            </a>{" "}
            | 10.3 MILLONES de seguidores <br />
            Instagram:{" "}
            <a target="blank" href="https://www.instagram.com/ricardoarjona/">
              @ricardoarjona
            </a>
            | 5.6 MILLONES de seguidores <br />
            Youtube:{" "}
            <a target="blank" href="https://www.youtube.com/user/ArjonaOficial">
              @ArjonaOficial
            </a>
            | 6.9 MILLONES de suscriptores <br />
            Tik Tok:{" "}
            <a target="blank" href="https://www.tiktok.com/@ricardoarjona">
              @arjonaoficial
            </a>{" "}
            <br /> <br />
            PARA MÁS INFORMACIÓN: <br />
            <a
              target="blank"
              className="underline"
              href="https://www.ricardoarjona.com"
            >
              www.ricardoarjona.com
            </a>
          </p>
          <br />
          <p>Produce:</p>
          <img
            className="w-[200px]"
            src="https://tuentrada.com/concierto/ricardo-arjona/fenixv2.png"
            alt="logo fenix"
          />
          <div className="flex pt-2">
            <a href="https://www.facebook.com/fenixargentina/" target="_blank" rel="noreferrer">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                x="0px"
                y="0px"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="mr-7"
              >
                <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996C17.465,9.521,17.001,9,16.403,9z"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/fenix.entertainment.group/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                x="0px"
                y="0px"
                width="16"
                height="16"
                viewBox="0 0 50 50"
                className="mr-7"
              >
                <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
              </svg>
            </a>
            <a href="https://twitter.com/fenix_latam" target="_blank" rel="noreferrer">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                x="0px"
                y="0px"
                width="16"
                height="16"
                viewBox="0 0 30 30"
                className="mr-7"
              >
                <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/channel/UCyau-iJ51yGuHK2wab7AsDQ?view_as=subscriber"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="16"
                height="16"
                viewBox="0 0 30 30"
                fill="white"
                className="mr-7"
              >
                <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
              </svg>
            </a>
            <a href="https://fenix.com.ar/" target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="white"
                className="mr-7"
              >
                <path d="M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10s10-4.477,10-10S17.523,2,12,2z M13,17h-2v-6h2V17z M13,9h-2V7h2V9z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
