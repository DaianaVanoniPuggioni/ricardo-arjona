
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
          className={` bg-white border-white border hover:bg-transparent hover:text-white  text-lg text-black font-bold py-2 px-10  md:px-12 rounded-full`}
        >
          Comprar
        </button>
      </a>
    </>
  );
};
