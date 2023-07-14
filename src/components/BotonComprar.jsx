
export const BotonComprar = ({href}) => {
  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-block"
      >
        <button
          className={` bg-white border-white border hover:bg-transparent hover:text-white  text-lg lg:text-xl text-black font-bold py-2  px-20  md:px-24 rounded-full`}
        >
          Comprar
        </button>
      </a>
    </>
  );
};
