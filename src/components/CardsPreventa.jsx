// eslint-disable-next-line react/prop-types
import { FaCheck } from "react-icons/fa";
import PropTypes from "prop-types";
import { ImCross } from "react-icons/im";

export const CardsPreventa3 = ({ title, price, fee }) => {
  // Beneficios según el tipo de entrada
  let beneficios = [];
 
  if (title.toLowerCase().includes("campo")) {
    
    beneficios = [
      { texto: "Incluye acceso a todos los escenarios, shows, servicios, activaciones y espacios gastronómicos.", bold: false, include: true },
      { texto: "No incluye acceso a sector Experiencia Bandera.", bold: false, include: false },
    ];
  } else {
    
    beneficios = [
      { texto: "Ingreso exclusivo al predio", bold: false, include: true },
      { texto: "Gastronomía, servicios, zona de relax y sanitarios propios", bold: false, include: true },
      { texto: "Espacio diferencial al costado de los escenarios principales (no es campo delantero)", bold: false, include: true },
      { texto: "Acreditación para circular libremente por las diferentes áreas habilitadas", bold: false, include: true },
      { texto: "Capacidad limitada", bold: false, include: true },
    ];
  }
  const total = price + fee;
  const feeSinIVA = fee / 1.21;
  const sinImpuestos = price + feeSinIVA;

  return (
    <div className="flex-1 border-2 border-white rounded-lg bg-[#FA69D3] flex flex-col items-center min-w-[280px] max-w-md mx-auto h-full">
      <div className="w-full bg-[#FA69D3] py-3 flex justify-center items-center rounded-tr-lg rounded-tl-lg">
        <h3 className="text-xl font-bold uppercase text-white m-0">{title}</h3>
      </div>
      <div className="p-8 flex flex-col flex-1 w-full bg-black rounded-b-lg">
        <ul className="text-left space-y-2 mb-10 w-full">
          {beneficios.map((b, i) => (
            <li className="flex items-start" key={i}>
              {b.include === false ? (
                <ImCross className="text-red-500 mr-2 w-5 h-5 flex-shrink-0" size={20} />
              ) : (
                <FaCheck className="text-green-400 mr-2 w-5 h-5 flex-shrink-0" size={20} />
              )}
              {b.bold ? (
                <span className="font-bold">{b.texto}</span>
              ) : (
                <span>{b.texto}</span>
              )}
            </li>
          ))}
        </ul>
        <div className="w-full text-center mt-auto">
          <p className="text-white font-bold text-md mb-1">
            ${price.toLocaleString()} + ${fee.toLocaleString()}
          </p>
          <p className="text-sm text-gray-300 mb-2">
            Precio total sin impuestos nacionales: $
            {sinImpuestos.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="font-medium text-white mb-1">Valor entrada</p>
          <hr className="my-2 border-gray-400" />
          <p className="text-3xl font-bold text-white">
            ${total.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

CardsPreventa3.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  fee: PropTypes.number.isRequired,
};

export const CardsPreventa2 = () => {
  const sectores = [
    {
      nombre: "Sector A",
      letras: "A-B-C",
      preventa: { precio: 40000, fee: 6000 },
      general: { precio: 50000, fee: 7500 },
    },
    {
      nombre: "Sector B",
      letras: "D-E-F",
      preventa: { precio: 35000, fee: 5250 },
      general: { precio: 45000, fee: 6750 },
    },
    {
      nombre: "Sector C",
      letras: "G-H-I",
      preventa: { precio: 30000, fee: 4500 },
      general: { precio: 40000, fee: 6000 },
    },
    {
      nombre: "Sector D",
      letras: "Sin numerar",
      preventa: { precio: 15000, fee: 2250 },
      general: { precio: 20000, fee: 3000 },
    },
  ];
  const renderTabla = (tipo) => (
    <table className="min-w-full text-xs sm:text-base md:text-lg mb-10 text-white border border-white">
      <thead className="bg-transparent border-b border-white">
        <tr>
          <th className="px-4 py-2 border-r border-white">SECTOR</th>
          <th className="px-4 py-2 border-r border-white">PRECIO</th>
          <th className="px-4 py-2 border-r border-white">FEE</th>
          <th className="px-4 py-2">TOTAL</th>
        </tr>
      </thead>
      <tbody>
        {sectores.map((s, i) => (
          <tr key={i} className="border-b border-white">
            <td className="border-r border-white px-4 py-2">{s.nombre}</td>
            <td className="border-r border-white px-4 py-2">
              ${s[tipo].precio.toLocaleString()}
            </td>
            <td className="border-r border-white px-4 py-2">
              ${s[tipo].fee.toLocaleString()}
            </td>
            <td className="px-4 py-2">
              ${(s[tipo].precio + s[tipo].fee).toLocaleString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-10 text-white my-10 px-2">
      <div className="flex-1">
        <h3 className="text-lg font-bold mb-2">
          Preventa Banco Santa Fe - Banco Entre Ríos
        </h3>
        <p className="text-sm mb-4">Desde el miércoles 4/06 a las 12:00hs</p>
        {renderTabla("preventa")}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold mb-2">Venta General</h3>
        <p className="text-sm mb-4">Desde el viernes 6/06 a las 12:00hs</p>
        {renderTabla("general")}
      </div>
    </div>
  );
};

export const CardsPreventa = () => {
  return (
    <div className="w-full py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
        Opciones de Ticket para el Festival{" "}
        <span role="img" aria-label="ticket">
          🎟️
        </span>
      </h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {/* Entrada General (Campo) */}
        <div className="flex-1 border-2 border-white rounded-lg p-8 bg-black/60 flex flex-col items-center min-w-[280px] max-w-md mx-auto">
          <h3 className="text-xl font-bold mb-2">Entrada General</h3>
          <ul className="text-left space-y-2 mb-6">
            <li className="flex items-center">
              <FaCheck className="text-green-400 mr-2" />
              Acceso a <span className="font-bold ml-1">todos los shows</span>
            </li>
            <li className="flex items-center">
              <FaCheck className="text-green-400 mr-2" />
              Acceso a{" "}
              <span className="font-bold ml-1">propuestas gastronómicas</span>
            </li>
            <li className="flex items-center">
              <FaCheck className="text-green-400 mr-2" />
              Acceso a{" "}
              <span className="font-bold ml-1">experiencias artísticas</span>
            </li>
          </ul>
          <div className="mt-auto">
            <p className="text-2xl font-bold text-white">$70.000</p>
            <p className="text-sm text-gray-300">+ $7.000 fee</p>
          </div>
        </div>
        {/* Experiencia Bandera (VIP) */}
        <div className="flex-1 border-2 border-white rounded-lg p-8 bg-black/60 flex flex-col items-center min-w-[280px] max-w-md mx-auto">
          <h3 className="text-xl font-bold mb-2">Experiencia Bandera</h3>
          <p className="mb-2 text-center text-sm text-gray-200">
            Sector exclusivo con beneficios:
          </p>
          <ul className="text-left space-y-2 mb-6">
            <li className="flex items-center">
              <FaCheck className="text-green-400 mr-2" />
              <span className="font-bold">
                Gastronomía y bebida de cortesía
              </span>
            </li>
            <li className="flex items-center">
              <FaCheck className="text-green-400 mr-2" />
              Baños exclusivos
            </li>
            <li className="flex items-center">
              <FaCheck className="text-green-400 mr-2" />
              Vista privilegiada
            </li>
            <li className="flex items-center">
              <FaCheck className="text-green-400 mr-2" />
              Estacionamiento propio
            </li>
          </ul>
          <div className="mt-auto">
            <p className="text-2xl font-bold text-white">$190.000</p>
            <p className="text-sm text-gray-300">+ $19.000 fee</p>
          </div>
        </div>
      </div>
    </div>
  );
};
