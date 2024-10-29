import { useTranslation } from 'react-i18next';
import Illustration from '@assets/images/hero-illustration.svg';

export const OurServicesHero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10"
        aria-hidden="true">
        <img src={Illustration} className="max-w-none" alt="PixelWise hero" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Hero content */}
          <div className="max-w-xl mx-auto md:max-w-[640px] md:mx-0 text-center md:text-left">
            <div data-aos="zoom-out">
              <div className="relative text-sm text-gray-300 bg-gray-800 rounded-full inline-block px-4 py-1 mb-6 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full">
                <div className="text-gray-400">
                  {t('home.ourServices.subtitle')}
                </div>
              </div>
            </div>
            <h1
              className="h1 font-uncut-sans mb-6"
              data-aos="zoom-out"
              data-aos-delay="100">
              {t('home.ourServices.title')}
            </h1>
            <p
              className="text-xl text-gray-400 mb-10"
              data-aos="zoom-out"
              data-aos-delay="200">
              {t('home.ourServices.description')}
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="zoom-out"
              data-aos-delay="300">
              <div>
                <a
                  className="btn text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full shadow-lg group"
                  href="#0">
                  {t('home.ourServices.actions.seeMore')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
