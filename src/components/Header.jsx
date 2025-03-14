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
      <header
        className={`nav bg-no-repeat bg-cover bg-end z-40m mt-20`}
       
      >
        <img className="sm:block md:hidden" src="https://tuentrada.com/experiencia/wine-rock/celular.jpg" alt="Wine Rock Banner" />
        <img className="hidden md:block w-screen lg:hidden"  src="https://tuentrada.com/experiencia/wine-rock/celular.jpg" alt="Wine Rock Banner" />
        <img className="hidden  lg:block w-full"  src="https://tuentrada.com/experiencia/wine-rock/escritorio.webp" alt="Wine Rock Banner" />
        <h1 className="hidden">Wine Rock</h1>
        <h2 className="hidden">Lomas del Malbec, Lujan de Cuyo, Mendoza</h2>
          
     
      </header>
    </>
  );
};
