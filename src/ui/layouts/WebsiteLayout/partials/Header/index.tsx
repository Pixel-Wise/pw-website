import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import SVG_ICON from '@assets/images/SVG_ICON.svg';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

interface HeaderProps {
  nav?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ nav = true }) => {
  const { t } = useTranslation();

  return (
    <header className="absolute w-full z-30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo + Nombre */}
          <NavLink to="/" aria-label="PixelWise" className="flex items-center">
            <img
              src={SVG_ICON}
              alt="Logo PixelWise"
              className="h-30 w-30 mr-2"
            />
            <h2 className="text-2xl font-black font-sans hover:text-primary-200 text-theme">
              {import.meta.env.VITE_APP_NAME}
            </h2>
          </NavLink>

          {/* Navegación + Redes (solo desktop si nav=true) */}
          {nav && (
            <div className="flex items-center space-x-8">
              
              {/* Enlaces de sección */}
              <nav>
                <ul className="flex space-x-6">
                  {['aboutUs', 'ourServices', 'team', 'contact'].map((key) => (
                    <li key={key}>
                      <Link
                        to={key}
                        smooth
                        className="text-theme hover:text-primary-200 px-3 py-2 transition"
                      >
                        {t(`header.${key}`)}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <NavLink
                      to="/blog"
                      className="text-theme hover:text-primary-200 px-3 py-2 transition"
                    >
                      {t('header.blog')}
                    </NavLink>
                  </li>
                </ul>
              </nav>

              {/* Iconos sociales */}
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme hover:text-primary-200 transition"
                >
                  <FaFacebookF size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme hover:text-primary-200 transition"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme hover:text-primary-200 transition"
                >
                  <FaLinkedinIn size={18} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
