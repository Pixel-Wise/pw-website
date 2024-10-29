import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { WebsiteLayout } from './../ui/layouts/WebsiteLayout';
import { Home } from './../ui/views/ExampleView';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/*" element={<WebsiteLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
