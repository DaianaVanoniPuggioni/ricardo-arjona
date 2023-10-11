export const DetalleConcierto = () => {
  return (
    <section className="text-white p-5 container mx-auto py-10 lg:py-10">
      <h3 className="text-2xl lg:text-4xl pb-10">Detalle del concierto</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-5 mb-7">
        <div className="space-y-3">
          <h5 className="text-xl lg:text-2xl">Dirección</h5>
          <hr className="border border-white" />
          <p className="text-base lg:text-lg">Estadio Huracán</p>
          <p className="text-base lg:text-lg">Av. Amancio Alcorta 2544, CABA</p>
        </div>
        <div className="space-y-3 pt-10 lg:pt-0">
          <h5 className="text-xl lg:text-2xl">Fecha y hora</h5>
          <hr className="border border-white" />
          <p className="text-base lg:text-lg">17 de Diciembre 2023, 17:00 hs</p>
          
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.310773908684!2d-58.3983169549184!3d-34.643891433499576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb6aeed57bd3%3A0xe5cec50209b9c4ad!2sEstadio%20Tom%C3%A1s%20Adolfo%20Duc%C3%B3!5e0!3m2!1ses!2sar!4v1696958512834!5m2!1ses!2sar"
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
