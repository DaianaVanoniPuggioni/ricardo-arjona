export const DetalleConcierto = () => {
  return (
    <section className="text-white p-5 container mx-auto py-10 lg:py-10">
      <h3 className="text-2xl lg:text-4xl pb-10">Detalle del concierto</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-5 mb-7">
        <div className="space-y-3">
          <h5 className="text-xl lg:text-2xl">Dirección</h5>
          <hr className="border border-white" />
          <p className="text-base lg:text-lg">Estadio Único de La Plata</p>
          <p className="text-base lg:text-lg">Av. 25, La Plata</p>
        </div>
        <div className="space-y-3 pt-10 lg:pt-0">
          <h5 className="text-xl lg:text-2xl">Fecha y hora</h5>
          <hr className="border border-white" />
          <p className="text-base lg:text-lg">8 de Junio 2024 20:30 horas<br /> Puertas: 17:00 horas</p>
          
        </div>
      </div>
      <iframe
     
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11004.699648963408!2d-57.991578965259194!3d-34.91355636767936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e796c35ba77f%3A0xfa546c6ec8fdfd96!2sEstadio%20%C3%9Anico%20Diego%20Armando%20Maradona!5e0!3m2!1ses!2sar!4v1712863169499!5m2!1ses!2sar"
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
