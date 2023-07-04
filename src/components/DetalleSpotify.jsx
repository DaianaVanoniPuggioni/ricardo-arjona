// import { SpotifyCard } from "./SpotifyCard";

export const DetalleSpotify = () => {
  return (
    <section className="text-white p-5 container mx-auto py-10 lg:py-10">
      <div className="text-white py-10 lg:py-10">
        <h3 className="text-2xl lg:text-4xl pb-10">
          Blanco y Negro <br />
          Volver… para decir adiós
        </h3>

        <p>
        El cantautor cerrará su exitosa gira blanco y negro con un show único 

en el estadio Vélez Sarsfield
        </p>
        <p className="my-5">
        Buenos Aires, 4 de Julio de 2023, luego de recorrer los escenarios más importantes del mundo el ícono músico y cantautor guatemalteco Ricardo Arjona regresa a Sudamérica para despedirse de su gira Blanco y Negro <br /> <br />
        Ricardo Arjona uno de los artistas más trascendentales en la historia de la música latina, anunció las fechas de los conciertos que darán cierre a su aclamada gira Blanco y Negro en Argentina y Chile.<br />
          <br />
          Ricardo Arjona tiene el récord histórico en nuestro país de 34 Luna Park, 8 Estadios GEBA, 6 Estadios Boca Juniors, 5 Estadios Vélez Sársfield, 5 DirecTV Arena y 5 Orfeo Superdomo.<br />
          <br />
          Tras dos años de gira, con 160 conciertos y constantes sold outs, visitando 110 ciudades entre Latinoamérica, Europa y Estados Unidos donde recientemente realizó dos sold out en el místico Madison Square Garden, además de batir un récord histórico en las cinco fechas del Movistar Arena de Miami convirtiéndose así en el primer cantautor que ha logrado agotar 5 shows en dicho estadio.  Ricardo Arjona suma dos espectáculos inolvidables que presentarán el repaso de su trayectoria musical de más de 30 años.
          <br />
         <strong> Uno de ellos será el próximo 15 de septiembre en el Estadio Velez Sarsfield.</strong>

 
         
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <img src="https://tuentrada.com/concierto/ricardo-arjona/img1.jpg" alt="" />
          <img src="https://tuentrada.com/concierto/ricardo-arjona/img2.jpg" alt="" />
          <img src="https://tuentrada.com/concierto/ricardo-arjona/img3.jpg" alt="" />
          <img src="https://tuentrada.com/concierto/ricardo-arjona/img4.jpg" alt="" />
        </div>
        
      <h3 className="text-2xl lg:text-4xl pb-10 pt-20 ">Escúchalas en Spotify</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-5">
        <div className="space-y-3">
          {/* <SpotifyCard
            link={
              "https://open.spotify.com/track/2OZsedyLpIuOVRVODdhaMZ?si=1d4297bf3a97429f"
            }
          /> */}
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
          <hr className="border border-white  " />
          <p className="text-base lg:text-lg">Fuiste Tú</p>
        </div>
        <div className="space-y-3">
          {/* <SpotifyCard
            link={
              "https://open.spotify.com/track/2TDyyEBasw10wu5Uh94bR1?si=d1326544cd824fff"
            }
          /> */}
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
          <hr className="border border-white  " />
          <p className="text-base lg:text-lg">El Problema</p>
        </div>
        <div className="space-y-3">
          {/* <SpotifyCard
            link={
              "https://open.spotify.com/track/6fmpK6IerfBrhZo4a2MYkC?si=2ec87bc18ec74f8c"
            }
          /> */}
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
          <hr className="border border-white  " />
          <p className="text-base lg:text-lg">Historia de Taxi</p>
        </div>
        <div className="space-y-3">
          {/* <SpotifyCard
            link={
              "https://open.spotify.com/track/39qtjJ454r2fgyXaenq8Wv?si=8e7b62be756341df"
            }
          /> */}
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
          <hr className="border border-white  " />
          <p className="text-base lg:text-lg">Desnuda</p>
        </div>
      </div>
      <div className="text-white pt-10">
          <h3 className="text-2xl lg:text-4xl pb-10 pt-10 ">
            Conectá con Ricardo Arjona
          </h3>
          <p>
            Facebook: <a href="https://www.facebook.com/arjonaoficial/">@ArjonaOficial</a>| 18 MILLONES de seguidores <br />
            Twitter: <a href="https://twitter.com/Ricardo_Arjona">@Ricardo_Arjona </a> | 10.3 MILLONES de seguidores <br />
            Instagram: <a href="https://www.instagram.com/ricardoarjona/">@ricardoarjona</a>| 5.6 MILLONES de seguidores <br />
            Youtube: <a href="https://www.youtube.com/user/ArjonaOficial">@ArjonaOficial</a>| 6.9 MILLONES de suscriptores <br />
            Tik Tok: <a href="https://www.tiktok.com/@ricardoarjona">@arjonaoficial</a>  <br /> <br />
            PARA MÁS INFORMACIÓN: <br />
            <a className="underline" href="https://www.ricardoarjona.com">www.ricardoarjona.com</a>
          </p><br /> 
          <p>Produce:</p>
          <img className="w-[200px]" src="https://tuentrada.com/concierto/ricardo-arjona/fenixv2.png" alt="" /> 
          
        </div>
       
      </div>
    </section>
  );
};
