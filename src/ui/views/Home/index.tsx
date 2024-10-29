import { AboutUs } from './partials/AboutUs';
import { OurClients } from './partials/OurClients';
import { OurServicesHero } from './partials/OurServicesHero';

export const Home = () => {
  return (
    <>
      <OurServicesHero />
      <OurClients />
      <AboutUs />
    </>
  );
};
