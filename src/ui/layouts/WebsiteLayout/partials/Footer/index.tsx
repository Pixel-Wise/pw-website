import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram,FaLinkedinIn} from 'react-icons/fa';


export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 border-t border-slate-800">
        {/* Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 mb-0">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-2 lg:max-w-xs">
            <div className="mb-2">
              {/* Logo */}
              <NavLink className="inline-flex" to="/" aria-label="PixelWise">
                <h2 className="text-3xl font-black font-sans">
                  {import.meta.env.VITE_APP_NAME}
                </h2>
              </NavLink>
            </div>
          </div>
          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-gray-200 font-semibold uppercase mb-2">
              E-mails
            </h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0">
                  contacto@pixelwise.com.mx
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0">
                  sales@pixelwise.com.mx
                </a>
              </li>
            </ul>
          </div>
          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-gray-200 font-semibold uppercase mb-2">
              Phones
            </h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0">
                  55 5606 1840
                </a>
              </li>
            </ul>
          </div>
          {/* 4th block - Legals */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-gray-200 font-semibold uppercase mb-2">
              Legals
            </h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0">
                  Terms
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* 5th block - Social */}
            <div className="sm:col-span-6 md:col-span-6 lg:col-span-4">
            <h6 className="text-xs text-gray-200 font-semibold uppercase mb-2">
              Siguenos
            </h6>
            <ul className="flex space-x-4 text-sm">
              <li>
               <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-blue-600 transition"
                >
                  <FaFacebookF size={18} />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-pink-500 transition"
                >
                  <FaInstagram size={18} />
                </a>
              </li>
              <li>
                 <a
                  href="https://linkedin.com"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-gray-200 hover:text-blue-400 transition"
                  >
                   <FaLinkedinIn size={18} />
                 </a>
               </li>
            </ul>
          </div>
        </div>
       
        <div className="w-full text-center py-1">
          <div className="text-sm text-gray-600">
            <span className="text-gray-400">
              Hecho con ❤️ por {import.meta.env.VITE_APP_NAME} © {currentYear}
            </span>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

