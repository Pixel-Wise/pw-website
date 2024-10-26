import { Outlet } from 'react-router-dom';

import { Header } from './partials/Header';
import { Footer } from './partials/Footer';

export const WebsiteLayout = () => {
  return (
    <>
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
