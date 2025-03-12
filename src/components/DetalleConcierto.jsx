export const DetalleConcierto = () => {
  return (
    <section className="text-white p-5 container mx-auto py-10 lg:py-10">
      <h3 className="text-2xl lg:text-4xl pb-2">Detalle del concierto</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-5 mb-7">
        <div className="space-y-3">
          <h5 className="text-xl lg:text-2xl">Dirección</h5>
          <hr className="border border-white" />
          <p className="text-base lg:text-lg">Autódromo Municipal Juan Manuel Fangio</p>
          <p className="text-base lg:text-lg">Av. Jorge Newbery y García del Cossio</p>
        </div>
        <div className="space-y-3 pt-10 lg:pt-0">
          <h5 className="text-xl lg:text-2xl">Fecha y hora</h5>
          <hr className="border border-white" />
          <p className="text-base lg:text-lg">Viernes 28, Sábado 29 y Domingo 30 de Marzo<br /> Horario: 08:00 horas</p>
          
        </div>
      </div>

      

      
      <iframe
     
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.631844236626!2d-60.75166251194096!3d-32.90790080187378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab1c20f40dab%3A0x639903a5895cd30!2sAut%C3%B3dromo%20Municipal%20Juan%20Manuel%20Fangio!5e0!3m2!1sen!2sar!4v1741809145706!5m2!1sen!2sar"
        width="100%"
        height="300"
        style={{ border: "0", filter: "hue-rotate(350deg)" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};
