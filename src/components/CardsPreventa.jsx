// eslint-disable-next-line react/prop-types
export const CardsPreventa = ({ title, price, fee }) => {
  const total = price + fee;
  const sinImpuestos = (total / 1.21).toFixed(2); // Suponiendo 21% de IVA

  return (
    <div className="w-full rounded-lg shadow-lg overflow-hidden bg-transparent text-center border-2 border-white">
      <div className="bg-[#FA69D3] py-3 text-white font-bold text-lg px-5">
        {title}
      </div>
      <div className="p-4 text-white">
        <p className="text-white font-bold text-md mb-1">
          ${price.toLocaleString()} + ${fee.toLocaleString()}
        </p>
        <p className="text-sm text-gray-300 mb-4">
          Precio total sin impuestos nacionales: ${Number(sinImpuestos).toLocaleString()}
        </p>
        <p className="font-medium text-white">Valor entrada</p>
        <hr className="my-2 border-gray-400" />
        <p className="text-3xl font-bold text-white">
          ${total.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
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
            <td className="border-r border-white px-4 py-2">${s[tipo].precio.toLocaleString()}</td>
            <td className="border-r border-white px-4 py-2">${s[tipo].fee.toLocaleString()}</td>
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
        <h3 className="text-lg font-bold mb-2">Preventa Banco Santa Fe - Banco Entre Ríos</h3>
        <p className="text-sm mb-4">
          Desde el miércoles 4/06 a las 12:00hs
        </p>
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