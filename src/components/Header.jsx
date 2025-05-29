export const Header = () => {
  // const [showButton, setShowButton] = useState(false);
  // const targetDate = new Date('2023-06-27');

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const currentDate = new Date();

  //     if (currentDate >= targetDate) {
  //       setShowButton(true);
  //       clearInterval(interval);
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <header className={`nav bg-no-repeat bg-cover bg-end z-40m mt-20`}>
        <img
          className="sm:block md:hidden"
          src="https://tuentrada.com/experiencia/festival-bandera/banner-celular.jpg"
          alt="Festival Bandera Banner"
        />
        <img
          className="hidden md:block w-screen lg:hidden"
          src="https://tuentrada.com/experiencia/festival-bandera/banner-celular.jpg"
          alt="Festival Bandera Banner"
        />
        <img
          className="hidden  lg:block w-full"
          src="https://tuentrada.com/experiencia/festival-bandera/banner-escritorio.jpg"
          alt="Festival Bandera Banner"
        />
        <h1 className="hidden">Festival Bandera</h1>
        <h2 className="hidden">Hipódromo de Rosario</h2>
      </header>
    </>
  );
};
