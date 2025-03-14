// import { SpotifyCard } from "./SpotifyCard";

export const DetalleSpotify = () => {
  return (
    <section  id="tickets" className="text-white py-5 container mx-auto ">
      <div className="text-white">
      
      <div className="text-white text-center pb-10 bg-[#0A0F1D] w-full">
  
  {/* Título Principal */}
  <h2 className="text-3xl font-bold pb-3 text-whiteinline-block">
    Opciones de Ticket para el Festival 🎟
  </h2>

  {/* Contenedor de Entradas */}
  <div className="w-full flex flex-col md:flex-row justify-center gap-8 mt-6">
    
    {/* Entrada General */}
    <div className=" p-6 rounded-lg shadow-md w-full md:w-1/2 border-2 border-white">
      <h3 className="text-2xl font-semibold text-white py-2">
        Entrada General
      </h3>
      <ul className="text-base leading-relaxed">
        <li>✔ Acceso a <strong>todos los shows</strong></li>
        <li>✔ Acceso a <strong>propuestas gastronómicas</strong></li>
        <li>✔ Acceso a <strong>experiencias artísticas</strong></li>
      </ul>
    </div>

    {/* Entrada VIP */}
    <div className=" p-6 rounded-lg shadow-md w-full md:w-1/2 border-2 border-white">
      <h3 className="text-2xl font-semibold text-white py-2">
        Entrada VIP
      </h3>
      <p className="text-base leading-relaxed">Sector exclusivo con beneficios:</p>
      <ul className="text-base leading-relaxed mt-2">
        <li>✔ <strong>Gastronomía y bebida de cortesía</strong></li>
        <li>✔ <strong>Baños exclusivos</strong></li>
        <li>✔ <strong>Vista privilegiada</strong></li>
        <li id="info">✔ <strong>Estacionamiento propio</strong></li>
      </ul>
    </div>
  
  </div>

</div>

 {/* Nueva Sección para Próximamente */}
 <div  className="text-white text-center py-10  w-full">
          <h2 className="text-3xl font-bold pb-3">
            Próximamente Más Información
          </h2>
          <p className="text-base max-w-2xl mx-auto">
            Estamos preparando una experiencia increíble para vos. Próximamente podrás acceder a:
          </p>
          <ul className="text-base leading-relaxed mt-4 ">
            <li>✔ Inscripción a experiencias gratuitas</li>
            <li>✔ Playlist exclusiva de Wine Rock</li>
            <li>✔ Sección de prensa con materiales descargables</li>
          </ul>
          <p className="mt-6 text-gray-300">
            ¡Mantente atento a nuestras actualizaciones!
          </p>
        </div>

    

      </div>

      
    </section>
  );
};
