import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { WebsiteLayout } from './../ui/layouts/WebsiteLayout';
import { Home } from './../ui/views/Home';
import { Blog } from './../ui/views/Blog';
import { ServiceDetail } from './../ui/views/Services';
import { Quote } from './../ui/views/Quote';
// import {ContactPage} from 'src/ui/components/ContactPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/*" element={<WebsiteLayout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="servicios/:serviceId" element={<ServiceDetail />} />
        <Route path="cotizar" element={<Quote />} />
        {/* <Route path='contacto' element ={<ContactPage/>}/> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
