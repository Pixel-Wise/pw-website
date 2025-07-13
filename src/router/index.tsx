import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { WebsiteLayout } from './../ui/layouts/WebsiteLayout';
import { Home } from './../ui/views/Home';
// import {ContactPage} from 'src/ui/components/ContactPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/*" element={<WebsiteLayout />}>
        <Route index element={<Home />} />
        {/* <Route path='contacto' element ={<ContactPage/>}/> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
