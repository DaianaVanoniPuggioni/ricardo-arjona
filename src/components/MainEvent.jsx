import { DetalleSpotify, DetalleConcierto, Preventas, Footer } from ".";
import { CardsPreventa } from "./CardsPreventa";



export const MainEvent = () => {
  return (
    <main>
      <div className="bg-2 px-5 md:px-20  lg:px-32 ">
        <Preventas />
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-10 bg-1 px-4 mb-10">
        {/* <DetalleSpotify /> */}
        <div className="w-full md:w-1/3">
          <CardsPreventa
            title="Campo"
            price={70000}
            fee={7000}
          />
        </div>
        <div className="w-full md:w-1/3">
          <CardsPreventa
            title="Experiencia Bandera"
            price={190000}
            fee={19000}
          />
        </div>
       
        {/* <CardsPreventa titulo="Preventa Banco Entre Rios" precio={1000} fee={100} /> */}
         {/* <DetalleConcierto />  */}
         
      </div>
      <section className="text-white container mx-auto px-4 md:px-20 lg:px-32 py-10">

      <iframe width="100%" height="315" src="https://www.youtube.com/embed/HUm9IrQZ8_o?si=0Vz0tUANUm1Z6kfz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      
    
      </section>
      <section id="legales" className="text-white container mx-auto px-4 md:px-20 lg:px-32 py-10">
      <div className="text-white text-center w-full">
        <div className="text-white text-center pb-10 w-full flex flex-col justify-center items-center">
          <p className="text-sm  text-left">
            <strong>Legales Banco Santa Fe FESTIVAL BANDERA Preventa</strong><br />
            C.F.T.: 0,00% Preventa Exclusiva Banco Santa Fe: Vigencia desde el 04/06/2025 a las 12 pm hasta el 06/06/2025 a las 12 pm inclusive. Beneficio 12 cuotas sin interés sobre precio de contado. Promoción válida para la compra de entradas para el Festival Bandera. Exclusivo abonando con tarjeta de crédito Visa emitidas por el Nuevo Banco Santa Fe S.A. Costo financiero total (C.F.T.): 0,00%, tasa efectiva anual (T.E.A.): 0,00%, tasa nominal anual (T.N.A.): 0,00%. Ejemplo: Podrá financiar una compra precio de contado de $180.000 en 12 cuotas fijas de $15.000 c/u. Recibirá en la primera liquidación de su tarjeta un consumo de $15.000. En la segunda y hasta la décima segunda liquidación posterior a la compra, recibirá un consumo de $15.000 en cada uno de ellos. Válido para cartera de consumo. Nuevo Banco Santa Fe S.A. solo informa el medio y las condiciones para el pago de los productos/servicios ofrecidos por el proveedor. Previo a la contratación del producto o servicio, verifique con el proveedor sus condiciones y alcance de la garantía. Nuevo Banco Santa Fe S.A. – CUIT 30-69243266-1 - San Martin N°715, Provincia de Santa Fe.
          </p>
          <br />
          <p className="text-sm  text-left">
            <strong>Legales Banco Santa Fe FESTIVAL BANDERA Venta General</strong><br />
            C.F.T.: 0,00% Vigencia desde el 06/06/2025 a las 12:01 pm hasta agotar stock. Beneficio 9 cuotas sin interés sobre precio de contado. Promoción válida para la compra de entradas para el Festival Bandera. Exclusivo abonando con tarjeta de crédito Visa emitidas por el Nuevo Banco Santa Fe S.A. costo financiero total (C.F.T.): 0,00%, tasa efectiva anual (T.E.A.): 0,00%, tasa nominal anual (T.N.A.): 0,00%. Ejemplo: Podrá financiar una compra precio de contado de $180.000 en 9 cuotas fijas de $20.000 c/u. Recibirá en la primera liquidación de su tarjeta un consumo de $20.000. En la segunda y hasta la novena liquidación posterior a la compra, recibirá un consumo de $20.000 en cada uno de ellos. Válido para cartera de consumo. Nuevo Banco Santa Fe S.A. solo informa el medio y las condiciones para el pago de los productos/servicios ofrecidos por el proveedor. Previo a la contratación del producto o servicio, verifique con el proveedor sus condiciones y alcance de la garantía. Nuevo Banco Santa Fe S.A. – CUIT 30-69243266-1 - San Martin N°715, Provincia de Santa Fe.
          </p>
          <br />
          <p className="text-sm  text-left">
            <strong>Legales Banco de Entre Rios FESTIVAL BANDERA Preventa</strong><br />
            C.F.T.: 0,00% Preventa Exclusiva Banco Entre Ríos: Vigencia desde el 04/06/2025 a las 12 pm hasta el 06/06/2025 a las 12 pm inclusive. Beneficio 12 cuotas sin interés sobre precio de contado. Promoción válida para la compra de entradas para el Festival Bandera. Exclusivo abonando con tarjeta de crédito Visa emitidas por el Nuevo Banco de Entre Ríos S.A. costo financiero total (C.F.T.): 0,00%, tasa efectiva anual (T.E.A.): 0,00%, tasa nominal anual (T.N.A.): 0,00%. Ejemplo: Podrá financiar una compra precio de contado de $180.000 en 12 cuotas fijas de $15.000 c/u. Recibirá en la primera liquidación de su tarjeta un consumo de $15.000. En la segunda y hasta la décima segunda liquidación posterior a la compra, recibirá un consumo de $15.000 en cada uno de ellos. Válido para cartera de consumo. Nuevo Banco de Entre Ríos S.A. solo informa el medio y las condiciones para el pago de los productos/servicios ofrecidos por el proveedor. Previo a la contratación del producto o servicio, verifique con el proveedor sus condiciones y alcance de la garantía. Nuevo Banco de Entre Ríos S.A. - Cuit 33-70799551-9 - Monte Caseros 128, Paraná, Entre Ríos.
          </p>
          <br />
          <p className="text-sm text-left">
            <strong>Legales Banco de Entre Rios FESTIVAL BANDERA Venta General</strong><br />
            C.F.T.: 0,00% Vigencia desde el 06/06/2025 a las 12:01 pm hasta agotar stock. Beneficio 9 cuotas sin interés sobre precio de contado. Promoción válida para la compra de entradas para el Festival Bandera. Exclusivo abonando con tarjeta de crédito Visa emitidas por el Nuevo Banco de Entre Rios S.A. costo financiero total (C.F.T.): 0,00%, tasa efectiva anual (T.E.A.): 0,00%, tasa nominal anual (T.N.A.): 0,00%. Ejemplo: Podrá financiar una compra precio de contado de $180.000 en 9 cuotas fijas de $20.000 c/u. Recibirá en la primera liquidación de su tarjeta un consumo de $20.000. En la segunda y hasta la novena liquidación posterior a la compra, recibirá un consumo de $20.000 en cada uno de ellos. Válido para cartera de consumo. Nuevo Banco de Entre Ríos S.A. solo informa el medio y las condiciones para el pago de los productos/servicios ofrecidos por el proveedor. Previo a la contratación del producto o servicio, verifique con el proveedor sus condiciones y alcance de la garantía. Nuevo Banco de Entre Ríos S.A. - Cuit 33-70799551-9 - Monte Caseros 128, Paraná, Entre Ríos.
          </p>
        </div>
      </div>
    </section>
      <Footer />
    </main>
  );
};
