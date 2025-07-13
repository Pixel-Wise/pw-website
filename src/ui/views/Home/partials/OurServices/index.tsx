import CustomerImg01 from '@assets/images/pricing-illustration.svg';
import CustomerBg01 from '@assets/images/pricing-illustration.svg';
import CustomerImg02 from '@assets/images/pricing-illustration.svg';
import CustomerBg02 from '@assets/images/pricing-illustration.svg';
import CustomerImg03 from '@assets/images/pricing-illustration.svg';
import CustomerBg03 from '@assets/images/pricing-illustration.svg';
import CustomerImg04 from '@assets/images/pricing-illustration.svg';
import CustomerBg04 from '@assets/images/escritorio.jpg';
import CustomerImg05 from '@assets/images/pricing-illustration.svg';
import CustomerBg05 from '@assets/images/pricing-illustration.svg';
import CustomerImg06 from '@assets/images/pricing-illustration.svg';
import CustomerBg06 from '@assets/images/pricing-illustration.svg';
import CustomerImg07 from '@assets/images/pricing-illustration.svg';
import CustomerBg07 from '@assets/images/pricing-illustration.svg';
import CustomerImg08 from '@assets/images/pricing-illustration.svg';
import CustomerBg08 from '@assets/images/pricing-illustration.svg';
import Highlighter, { HighlighterItem02 } from '@ui/components/highlighter';
import { Link } from 'react-router-dom';

export const OurServices = () => {
  const items = [
    {
      name: 'Software a la medida',
      img: CustomerImg01,
      bg: CustomerBg01,
      link: '/servicios/software-a-medida',
    },
    {
      name: 'Desarrollo de App',
      img: CustomerImg02,
      bg: CustomerBg02,
      link: '/servicios/desarrollo-app',
    },
    {
      name: 'Consultoría tecnológica',
      img: CustomerImg03,
      bg: CustomerBg03,
      link: '/servicios/consultoria-tecnologica',
    },
    {
      name: 'Desarrollo paginas web',
      img: CustomerImg04,
      bg: CustomerBg04,
      link: '/servicios/desarrollo-paginas-web',
    },
    {
      name: 'Seguridad de datos',
      img: CustomerImg05,
      bg: CustomerBg05,
      link: '/servicios/seguridad-datos',
    },
    {
      name: 'Stream Service',
      img: CustomerImg06,
      bg: CustomerBg06,
      link: '/servicios/stream-service',
    },
    {
      name: 'Renta de Servidores',
      img: CustomerImg07,
      bg: CustomerBg07,
      link: '/servicios/renta-servidores',
    },
    {
      name: 'Infraestructura como servicio',
      img: CustomerImg08,
      bg: CustomerBg08,
      link: '/servicios/infraestructura-servicio',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="h2 font-uncut-sans mb-4">Our PixelWise Service</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-xl text-gray-300">
            En PixelWise, ofrecemos soluciones tecnológicas a la medida que impulsan tu negocio. Nos especializamos en:
          </p>
        </div>
      </div>
      <div>
        <div className="max-w-[352px] mx-auto sm:max-w-[728px] lg:max-w-none pb-12 md:pb-20">
          <Highlighter className="flex flex-col md:grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3">
            {items.map((item, index) => (
              <div key={index} className="flex items-center justify-center">
                <HighlighterItem02>
                  <Link
                    to={item.link}
                    className="relative block w-[352px] h-[198px] bg-gray-900 rounded-[inherit] overflow-hidden z-20 cursor-pointer"
                  >
                    {/* 1) Ilustración de fondo desenfocado */}
                    <img
                      src={item.bg}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-sm pointer-events-none"
                      aria-hidden="true"
                    />
                    {/* 2) Capa semitransparente para reforzar legibilidad */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>

                    {/* 3) Contenido "alto nivel" */}
                    <div className="relative z-30 flex flex-col items-center justify-center h-full px-4 text-center pointer-events-none">
                      {/* Icono o svg de cada servicio */}
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-12 h-12 mb-2 object-contain"
                      />
                      {/* Nombre del servicio */}
                      <h2 className="text-white text-2xl lg:text-3xl font-semibold">
                        {item.name}
                      </h2>
                    </div>
                  </Link>
                </HighlighterItem02>
              </div>
            ))}

            <div className="hidden md:flex flex-col items-center justify-center text-center p-4 col-start-2 row-start-2 md:col-start-1 md:row-start-3 md:col-span-2 lg:col-start-2 lg:col-span-1 lg:row-start-2">
              <h2 className="text-5xl font-black font-sans">
                {import.meta.env.VITE_APP_NAME}
              </h2>
            </div>
          </Highlighter>
        </div>
      </div>
      <div
        className="relative mt-5 lg:-mt-16 h-20 lg:h-60 w-full -z-10 "
        aria-hidden="true">
        <div
          className={`opacity-5 pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 translate-y-1/3 lg:translate-y-2/3 text-center text-[70px] lg:text-[185px] font-black leading-none before:bg-gradient-to-b before:from-blue-200 before:to-blue-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['<PixelWise/>'] after:absolute after:inset-0 after:bg-blue-500/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['<PixelWise/>'] after:[text-shadow:0_1px_0_white]`}></div>
        {/* Glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true">
          <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px] will-change-[filter]"></div>
        </div>
      </div>
    </div>
  );
};
