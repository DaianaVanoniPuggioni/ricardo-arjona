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
        <img className="sm:block md:hidden" src="https://tuentrada.com/evento/airbag/Airbag-900x800.jpg" alt="Ricardo Arjona" />
        <img className="hidden md:block w-screen lg:hidden"  src="https://tuentrada.com/evento/airbag/Airbag-800x400.jpg" alt="Ricardo Arjona" />
        <img className="hidden  lg:block w-full"  src="https://tuentrada.com/evento/airbag/airbag-escritorio.webp" alt="Ricardo Arjona" />
        <h1 className="hidden">AIRBAG</h1>
        <h2 className="hidden">Estadio Velez Sarfield</h2>
          
        {/* <div
          className={`min-h-[50vh] flex justify-center items-start flex-col `}
          >
          
        </div> */}
      </header>
    </>
  );
};
