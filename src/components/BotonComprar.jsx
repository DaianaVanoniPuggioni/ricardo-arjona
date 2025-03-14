import PropTypes from "prop-types";

export const BotonComprar = ({ href, label = "Comprar" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="block w-full"
    >
      <button
        className={`w-full bg-white border-white border hover:bg-transparent hover:text-white text-base text-black font-bold py-3 px-6 rounded-lg transition-all duration-300`}
      >
        {label}
      </button>
    </a>
  );
};

BotonComprar.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string,
};
