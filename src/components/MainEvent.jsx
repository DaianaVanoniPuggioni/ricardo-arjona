import { Preventas, Footer } from ".";
import { CardsContainer } from "./CardsContainer";
import { Legales } from "./Legales";
import { RestInformation } from "./RestInformation";
import { Video } from "./Video";

export const MainEvent = () => {
  return (
    <main className="text-white container mx-auto px-6">
      {/* Preventas y RestInformation */}
      <div>
        <Preventas />
        {/* CardsContainer */}
        <CardsContainer />
        <RestInformation />
      </div>

      {/* Iframe de video */}
      <Video />

      {/* Legales */}
      <Legales />

      {/* Footer */}
      <Footer />
    </main>
  );
};
