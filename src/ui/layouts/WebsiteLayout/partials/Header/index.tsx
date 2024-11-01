import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

export const Header = ({ nav = true }: { nav?: boolean }) => {
  const { t } = useTranslation();

  return (
    <>
      <header className="absolute w-full z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Site branding */}
            <div className="shrink-0 mr-4">
              {/* Logo */}
              <NavLink className="block" to="/" aria-label="Cruip">
                <h2 className="text-3xl font-black font-sans">
                  {import.meta.env.VITE_APP_NAME}
                </h2>
              </NavLink>
            </div>

            {/* Desktop navigation */}
            {nav && (
              <nav className="flex grow">
                {/* Desktop sign in NavLinks */}
                <ul className="flex grow justify-end flex-wrap items-center">
                  <li>
                    <Link
                      className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                      to="aboutUs">
                      {t('header.aboutUs')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                      to="ourServices">
                      {t('header.ourServices')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                      to="team">
                      {t('header.team')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                      to="ourClients">
                      {t('header.ourClients')}
                    </Link>
                  </li>
                  {/* <li>
                    <NavLink
                      className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                      to="/signin">
                      {t('header.signIn')}
                    </NavLink>
                  </li>
                  <li className="ml-3">
                    <NavLink
                      className="btn-sm text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full shadow-lg group"
                      to="#0">
                      {t('header.start')}{' '}
                      <span className="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                        -&gt;
                      </span>
                    </NavLink>
                  </li> */}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
