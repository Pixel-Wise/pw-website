import { AboutUs } from './partials/AboutUs';
// import { OurClients } from './partials/OurClients';
import { OurServices } from './partials/OurServices';
import { OurServicesHero } from './partials/OurServicesHero';

export const Home = () => {
  return (
    <>
      <div>
        <OurServicesHero />
      </div>
      <div id="ourClients">
        
      </div>
      <div id="aboutUs">
        <AboutUs />
      </div>
      <div id="ourServices">
        <OurServices />
      </div>
    </>
  );
};
