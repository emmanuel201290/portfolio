import React from 'react';
import { PortfolioRouter } from './components/router/PortfolioRouter';
import { BrowserRouter as Router } from 'react-router-dom';

export const PortFolioApp = () => {
  return (
    <Router>
      <PortfolioRouter />;
    </Router>
  );
};
