export const DetalleSpotify = () => {
  return (
    <section id="tickets" className="text-white py-5 container mx-auto">
      <div className="text-white text-center w-full">

        {/* Sección de Experiencias */}
        <div className="text-white text-center pb-10 w-full flex flex-col justify-center items-center">

          {/* Banner de Experiencias */}
          <img 
            className="1-full mb-6 mx-auto rounded-lg" 
            src="https://tuentrada.com/experiencia/wine-rock/banner-experiencia-1.png" 
            alt="banner experiencias" 
          />
         

          {/* Mensaje Importante */}
          <div id="experiencia" className="bg-red-600 text-white text-sm p-3 rounded-md mx-auto">
            <strong>IMPORTANTE:</strong> El ticket de la experiencia sólo es válido si también contás con tu ticket para el festival. La compra de una experiencia no incluye el acceso al evento.
          </div>

          {/* Contenedor de Experiencias */}
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-16 mt-10 text-left w-full">

            {/* Experiencia 1 */}
            <div className="w-full">
              <img className="w-full h-auto rounded-lg mb-6" src="https://tuentrada.com/experiencia/wine-rock/experiencia-1.jpg" alt="Experiencia Agustina de Alba" />
              <h3 className="text-3xl font-semibold py-2 ">Hola Vino por Agus de Alba</h3>
              <p className="text-base leading-relaxed ">Agustina de Alba te invita a vivir una experiencia única en el mundo del vino, donde cada copa revela una nueva historia. A través de sus proyectos educativos, te llevará a explorar los secretos del vino de una forma inmersiva y accesible. Bajo el cielo de Mendoza, descubrirás el origen, la evolución y los matices de cada vino, aprendiendo a disfrutarlo y entenderlo como un verdadero experto. Con la belleza de los viñedos como escenario, te adentrarás en un recorrido sensorial lleno de sabor y conocimiento.</p>
              <p><strong>Fecha:</strong> Sábado 05 de abril</p>
              <p><strong>Horarios:</strong> 16h, 17h y 18h - las actividades comienzan puntual</p>
              <p><strong>Espacio:</strong> Viñedos</p>
              <p><strong>Cupo:</strong> 30 personas por horario</p>
              <p><strong>Valor:</strong> $15.000</p>
            </div>

            {/* Experiencia 2 */}
            <div className="w-full">
              <img className="w-full h-auto rounded-lg mb-6" src="https://tuentrada.com/experiencia/wine-rock/experiencia-2.jpg" alt="Experiencia Pablo Ponce" />
              <h3 className="text-3xl font-semibold py-2">De Cabeza al Vino con Pablo Ponce</h3>
              <p className="text-base leading-relaxed">Una degustación única entre viñedos, donde cada copa cuenta una historia. Bajo el sol mendocino, Pablo Ponce – enólogo y comunicador del vino – te guía en una experiencia inmersiva, divertida y llena de sabor. Descubrí los secretos del vino desde su origen, sentí su evolución en la copa y aprendé a interpretarlo como un experto, con el paisaje de Mendoza como el mejor maridaje.</p>
              <p><strong>Fecha:</strong> Sábado 05 de abril</p>
              <p><strong>Horarios:</strong> 17.30h y 18.30h - las actividades comienzan puntual</p>
              <p><strong>Espacio:</strong> Viñedos</p>
              <p><strong>Cupo:</strong> 30 personas por horario</p>
              <p><strong>Valor:</strong> $15.000</p>
            </div>

            {/* Experiencia 3 */}
            <div className="w-full">
              <img className="w-full h-auto rounded-lg mb-6" src="https://tuentrada.com/experiencia/wine-rock/experiencia-3.jpg" alt="Experiencia Gabriel Dvoskin" />
              <h3 className="text-3xl font-semibold py-2 ">Vinos y Naturaleza por Gabriel Dvoskin</h3>
              <p className="text-base leading-relaxed">Sumergite en un viaje sensorial a través de los vinos de Canopus, un pequeño viñedo orgánico y biodinámico en El Cepillo, Valle de Uco. Guiados por su creador, Gabriel Dvoskin, degustaremos espumantes, blancos y tintos que reflejan la pureza y potencia de la naturaleza. Una cata íntima donde el vino, la sensibilidad y el entorno se encuentran. Si fueran música, estos vinos estarían entre Miles y Bowie.</p>
              <p><strong>Fecha:</strong> Sábado 05 de abril</p>
              <p><strong>Horarios:</strong> 19h y 20.15h - las actividades comienzan puntual</p>
              <p><strong>Espacio:</strong> Experience LAB</p>
              <p><strong>Cupo:</strong> 40 personas por horario</p>
              <p><strong>Valor:</strong> $15.000</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
