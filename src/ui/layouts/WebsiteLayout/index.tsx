import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';

import './styles.css';

export const WebsiteLayout = () => {
  const handleScroll = () => {
    const header = document.getElementById('header');
    if (header) {
      if (window.scrollY > 0) {
        header.classList.add('header-active');
      } else {
        header.classList.remove('header-active');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Encabezado */}
      <Header />

      {/* Contenido dinámico */}
      <main className="grow">
        <Outlet />
      </main>

      {/* Pie de página */}
      <Footer />

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/525512345678?text=Hola,%20quiero%20más%20información%20sobre%20sus%20servicios."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <div className="bg-[#25D366] w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200">
          <svg
            width="38"
            height="38"
            viewBox="0 0 32 32"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.001 2.667a13.334 13.334 0 0 0-11.5 20.005L2.667 29.334l6.842-1.791A13.334 13.334 0 1 0 16.001 2.667Zm0 24A10.666 10.666 0 0 1 9.17 24.2l-.325-.2-4.012 1.05 1.072-3.921-.212-.342A10.666 10.666 0 1 1 16.001 26.667Zm5.528-7.755c-.304-.152-1.8-.888-2.08-.989-.28-.103-.483-.152-.687.152-.204.303-.788.989-.967 1.192-.178.204-.356.228-.66.076-.304-.152-1.28-.471-2.438-1.5-.902-.803-1.51-1.79-1.687-2.093-.177-.304-.02-.469.133-.62.136-.134.304-.355.456-.533.152-.18.203-.304.305-.507.101-.203.05-.38-.025-.532-.076-.152-.687-1.655-.94-2.27-.247-.592-.497-.511-.685-.521l-.585-.01c-.204 0-.533.075-.812.38-.28.304-1.064 1.04-1.064 2.536s1.09 2.94 1.242 3.14c.152.203 2.144 3.26 5.2 4.57.728.314 1.296.501 1.738.641.73.232 1.393.2 1.918.122.585-.088 1.8-.736 2.053-1.448.253-.711.253-1.319.178-1.447-.076-.127-.278-.203-.583-.355Z" />
          </svg>
        </div>
      </a>
    </div>
  );
};
