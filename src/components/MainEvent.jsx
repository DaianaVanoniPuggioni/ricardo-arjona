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
            title="Preventa Banco Santa Fe"
            price={1000}
            fee={100}
          />
        </div>
        <div className="w-full md:w-1/3">
          <CardsPreventa
            title="Preventa Banco Entre Ríos"
            price={1000}
            fee={100}
          />
        </div>
        <div className="w-full md:w-1/3">
          <CardsPreventa title="General" price={1000} fee={100} />
        </div>
        {/* <CardsPreventa titulo="Preventa Banco Entre Rios" precio={1000} fee={100} /> */}
        {/* <DetalleConcierto /> */}
      </div>
      <Footer />
    </main>
  );
};
