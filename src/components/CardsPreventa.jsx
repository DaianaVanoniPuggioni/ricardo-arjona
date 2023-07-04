// eslint-disable-next-line react/prop-types
export const CardsPreventa = ({ text, precio, total }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center text-center my-10">
    <div className="flex flex-col justify-center px-1 lg:px-10 md:pt-5 ">
      <table className="min-w-full max-w-full text-xs sm:text-base md:text-lg">
        <thead>
          <tr>
            <th className="px-4 py-2">SECTOR</th>
            <th className="px-4 py-2">LETRAS</th>
            <th className="px-4 py-2">PRECIO</th>
            <th className="px-4 py-2">FEE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Vip <br />Platinum</td>
            <td className="border px-4 py-2">B-C-D-E- <br />I-J-K-L</td>
            <td className="border px-4 py-2">$60,000</td>
            <td className="border px-4 py-2">$9,000</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Vip <br />Gold</td>
            <td className="border px-4 py-2">A-F-G-H- <br />M-N</td>
            <td className="border px-4 py-2">$50,000</td>
            <td className="border px-4 py-2">$7,500</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Vip <br />Silver</td>
            <td className="border px-4 py-2">O-P-Q-R-<br />S-T</td>
            <td className="border px-4 py-2">$40,000</td>
            <td className="border px-4 py-2">$6,000</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Platea <br />Preferencial <br />Norte</td>
            <td className="border px-4 py-2">R-S-T-U-<br />F-G-H-I</td>
            <td className="border px-4 py-2">$45,000</td>
            <td className="border px-4 py-2">$6,750</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Platea <br />Baja Norte</td>
            <td className="border px-4 py-2">V-J</td>
            <td className="border px-4 py-2">$30,000</td>
            <td className="border px-4 py-2">$4,500</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Platea <br />Preferencial <br />Baja Sur</td>
            <td className="border px-4 py-2">B-C-D-E</td>
            <td className="border px-4 py-2">$45,000</td>
            <td className="border px-4 py-2">$6,750</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Platea<br /> Baja Sur</td>
            <td className="border px-4 py-2">A</td>
            <td className="border px-4 py-2">$30,000</td>
            <td className="border px-4 py-2">$4,500</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Platea<br /> Alta Norte</td>
            <td className="border px-4 py-2">Sin<br /> numerar</td>
            <td className="border px-4 py-2">$20,000</td>
            <td className="border px-4 py-2">$3,000</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Platea Alta Sur</td>
            <td className="border px-4 py-2">Sin<br /> numerar</td>
            <td className="border px-4 py-2">$20,000</td>
            <td className="border px-4 py-2">$3,000</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">General <br />c/Acceso<br /> a Campo</td>
            <td className="border px-4 py-2">Sin<br /> numerar</td>
            <td className="border px-4 py-2">$15,000</td>
            <td className="border px-4 py-2">$2,250</td>
          </tr>
        </tbody>
      </table>
    </div>
  
  </div>
  
  );
};
