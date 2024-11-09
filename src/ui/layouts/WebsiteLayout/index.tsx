import { Outlet } from 'react-router-dom';

import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IContactForm, validationSchema } from './validationSchema';

import './styles.css';
import { useEffect, useState } from 'react';
import { ChatCenteredDots, XSquare } from '@phosphor-icons/react';
import { IContactRequest } from '@infrastructure/apis/Contact/types';
import { useContact } from '@ui/hooks/useContact';

export const WebsiteLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { sendContact } = useContact();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<IContactForm>({
    resolver: yupResolver(validationSchema),
  });

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

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const onSubmit = (data: IContactForm) => {
    const payload: IContactRequest = { ...data };

    sendContact.mutate(payload, {
      onSuccess: (response) => {
        reset();
        toast.success(response.message);
      },
      onError: (response) => {
        toast.error(response.message);
      },
    });
  };

  return (
    <>
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
      <div>
        {isOpen && <div className="overlay z-30" onClick={closeMenu}></div>}

        <div
          className={`p-5 flex-col w-full z-40 menu ${isOpen ? 'open' : ''}`}>
          <div
            className="icon border-1 border border-slate-700 text-slate-500 hover:text-slate-400 hover:border-slate-600"
            onClick={toggleMenu}>
            {isOpen && <XSquare size={32} />}
            {!isOpen && <ChatCenteredDots size={32} />}
          </div>
          <div className="max-w-4xl mx-auto w-full h-auto mt-3 mb-5">
            <div className="absolute bg-purple-500 h-[2px] w-3/4 left-2/4 -translate-x-1/2 rounded-[100%]"></div>
          </div>
          <div className="max-w-6xl mx-auto ">
            <div className="my-10">
              <p className="text-center">
                <span className="text-purple-500">
                  {import.meta.env.VITE_APP_NAME}
                </span>
                &nbsp; es una empresa apasionada en convertir tus ideas en
                realidad con soluciones de software a la medida. Contáctanos hoy
                mismo y descubre cómo podemos ayudarte a llevar tu negocio al
                siguiente nivel.
              </p>
            </div>
            <div className="mt-5">
              <p className="font-semibold italic text-center">
                Empieza hoy. El éxito está a un clic de distancia.
              </p>
            </div>
            <div className="my-1 md:my-16">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-4">
                  <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <div className="sm:w-1/2">
                      <label
                        className="block text-sm text-gray-400 font-medium mb-1"
                        htmlFor="name">
                        Nombre <span className="text-pink-500">*</span>
                      </label>
                      <input
                        {...register('name')}
                        id="name"
                        className="form-input py-2 w-full"
                        type="text"
                        required
                      />
                      <small className="text-rose-500">
                        {errors.name?.message}
                      </small>
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-sm text-gray-400 font-medium mb-1"
                      htmlFor="email">
                      Email <span className="text-pink-500">*</span>
                    </label>
                    <input
                      {...register('email')}
                      id="email"
                      className="form-input py-2 w-full"
                      type="email"
                      required
                    />{' '}
                    <small className="text-rose-500">
                      {errors.email?.message}
                    </small>
                  </div>
                  <div>
                    <label
                      className="block text-sm text-gray-400 font-medium mb-1"
                      htmlFor="email">
                      Subject <span className="text-pink-500">*</span>
                    </label>
                    <input
                      {...register('subject')}
                      id="subject"
                      className="form-input py-2 w-full"
                      type="email"
                      required
                    />{' '}
                    <small className="text-rose-500">
                      {errors.subject?.message}
                    </small>
                  </div>
                  <div>
                    <label
                      className="block text-sm text-gray-400 font-medium mb-1"
                      htmlFor="message">
                      Message <span className="text-pink-500">*</span>
                    </label>
                    <textarea
                      {...register('message')}
                      id="message"
                      className="form-input py-2 w-full"
                      required
                    />
                  </div>{' '}
                  <small className="text-rose-500">
                    {errors.message?.message}
                  </small>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={!isValid}
                    className={`
                      btn text-xs text-white  bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full shadow-lg group
                      ${!isValid && 'opacity-30 hover:bg-primary-500'}    
                    `}>
                    Enviar
                    <span className="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </button>
                </div>
                <div className="text-center mt-6">
                  Ó contactanos por{' '}
                  <span className="text-[#24D366]">Whatsapp</span>
                </div>
              </form>
            </div>
          </div>
          <div
            className="hidden md:block relative mt-5 lg:-mt-36 h-20 lg:h-52 w-full -z-10 "
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
      </div>
    </>
  );
};
