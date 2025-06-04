import { CardsPreventa3 } from "./CardsPreventa";

export const CardsContainer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 bg-1 mt-10">
      <div className="w-full md:w-1/3 flex">
        <CardsPreventa3 title="CAMPO" price={70000} fee={7000} />
      </div>
      <div className="w-full md:w-1/3 flex">
        <CardsPreventa3 title="EXPERIENCIA BANDERA" price={190000} fee={19000} />
      </div>
    </div>
  );
};
