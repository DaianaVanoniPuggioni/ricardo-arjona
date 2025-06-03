import { CardsPreventa } from "./CardsPreventa";

export const CardsContainer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 bg-1 mt-10">
      {/* <Detalle Cards /> */}
      <div className="w-full md:w-1/3">
        <CardsPreventa title="Campo" price={70000} fee={7000} />
      </div>
      <div className="w-full md:w-1/3">
        <CardsPreventa title="Experiencia Bandera" price={190000} fee={19000} />
      </div>
    </div>
  );
};
