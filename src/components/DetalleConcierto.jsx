export const DetalleConcierto = () => {
  return (
    <section className="text-white p-5 container mx-auto py-10 lg:py-10">
      <h3 className="text-2xl lg:text-4xl pb-10">Detalle del concierto</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-5 mb-7">
        <div className="space-y-3">
          <h5 className="text-xl lg:text-2xl">Dirección</h5>
          <hr className="border border-white" />
          <p className="text-base lg:text-lg">Estadio Velez Sarfield</p>
          <p className="text-base lg:text-lg">Av. Juan B. Justo 9200, CABA</p>
        </div>
        <div className="space-y-3 pt-10 lg:pt-0">
          <h5 className="text-xl lg:text-2xl">Fecha y hora</h5>
          <hr className="border border-white" />
          <p className="text-base lg:text-lg">15 de Septiembre 2023</p>
          <p className="text-base lg:text-lg">20:30 hs</p>  
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.7640857977963!2d-58.523271726386994!3d-34.63540155916851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc8382fb08ab9%3A0xea0ca78972856a8e!2sEstadio%20Jos%C3%A9%20Amalfitani!5e0!3m2!1ses!2sar!4v1688482549178!5m2!1ses!2sar"
        width="100%"
        height="300"
        style={{ border: "0", filter: "hue-rotate(170deg)" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};
