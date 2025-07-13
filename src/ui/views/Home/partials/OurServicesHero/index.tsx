import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import PixelWiseLogo from '@assets/images/SVG_ICON.svg';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { useEffect, useState } from 'react';
import { loadAll } from '@tsparticles/all';
import { type IOptions, type RecursivePartial } from '@tsparticles/engine';

export const OurServicesHero = () => {
  const { t } = useTranslation();
  const [init, setInit] = useState(false);
  const [opacity, setOpacity] = useState(1); // 👈 Controla la opacidad

  useEffect(() => {
    // Carga las partículas
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => setInit(true));

    // Controla la opacidad al hacer scroll
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const fadeOutHeight = window.innerHeight / 2; // altura para desaparecer
      const newOpacity = Math.max(1 - scrollTop / fadeOutHeight, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const particleOptions: RecursivePartial<IOptions> = {
    background: {
      color: { value: 'transparent' }, // Fondo transparente
    },
    fpsLimit: 60,
    particles: {
      color: { value: '#ffffff' },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        outModes: { default: 'out' },
      },
      number: {
        density: {
          enable: true,
          width: 800,
          height: 800,
        },
        value: 10,
      },
      opacity: {
        value: { min: 0.3, max: 0.7 },
      },
      shape: { type: 'square' },
      size: { value: { min: 4, max: 12 } },
    },
    detectRetina: true,
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Particles limited to Hero */}
      <div
        className="absolute top-0 left-0 w-full h-full -z-10 transition-opacity duration-300"
        style={{ opacity }}
      >
        {init && <Particles id="tsparticles" options={particleOptions} />}
      </div>

      {/* Gradient background */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none"
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <div data-aos="zoom-out" className="mb-8">
              <img
                src={PixelWiseLogo}
                className="inline-block w-20 h-20"
                alt="Logo de PixelWise"
              />
            </div>
            <h1
              className="h1 font-uncut-sans mb-9"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <Trans
                i18nKey="home.ourServices.title"
                components={{ blue: <span className="text-blue-500" /> }}
              />
            </h1>
            <p
              className="text-xl text-gray-400 mb-10"
              data-aos="zoom-out"
              data-aos-delay="300"
            >
              {t('home.ourServices.description')}
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="zoom-out"
              data-aos-delay="400"
            >
              <div>
                <Link
                  to="/cotizar"
                  className="btn text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full shadow-lg group"
                >
                  {t('home.ourServices.actions.seeMore')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
