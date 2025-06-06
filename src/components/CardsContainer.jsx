import { CardsPreventa3 } from "./CardsPreventa";

export const CardsContainer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 bg-1 mt-10">
      <div className="w-full md:w-1/3 flex">
        <CardsPreventa3 title="CAMPO" price={85000} fee={8500} />
      </div>
      <div className="w-full md:w-1/3 flex">
        <CardsPreventa3 title="EXPERIENCIA BANDERA" price={210000} fee={21000} />
      </div>
    </div>
  );
};
