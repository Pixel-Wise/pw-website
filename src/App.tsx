import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ExampleProvider } from './domain/example/ExampleContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppRoutes from './router';
import './ui/assets/styles/style.css';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ExampleProvider>
          <AppRoutes />
        </ExampleProvider>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
