import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ExampleProvider } from './domain/example/ExampleContext';
import AppRoutes from './router';
import './ui/assets/styles/style.css';

const App: React.FC = () => {
  return (
    <Router>
      <ExampleProvider>
        <AppRoutes />
      </ExampleProvider>
    </Router>
  );
};

export default App;
