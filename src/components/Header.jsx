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
        className={`nav bg-no-repeat bg-cover bg-end z-40`}
        // style={{
        //   backgroundImage: `url("https://www.tuentrada.com/concierto/rauw-alejandro/banner.png"})`,
        // }}
      >
        <img className="sm:block md:hidden" src="https://tuentrada.com/concierto/tcr/celular.webp" alt="tcr banner" />
        <img className="hidden md:block w-screen lg:hidden"  src="https://tuentrada.com/concierto/tcr/celular.webp" alt="tcr banner" />
        <img className="hidden  lg:block w-full"  src="https://tuentrada.com/concierto/tcr/desktop.webp" alt="tcr banner" />
        <h1 className="hidden">TCR SOUTH AMERICA BANCO BRB 2025</h1>
        <h2 className="hidden">Autódromo Municipal Juan Manuel Fangio</h2>
          
        {/* <div
          className={`min-h-[50vh] flex justify-center items-start flex-col `}
          >
          
        </div> */}
      </header>
    </>
  );
};
