import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppThemeProvider } from './theme';
import App from './app/app';

ReactDOM.render(
  <AppThemeProvider>
    <Router>
      <App />
    </Router>
  </AppThemeProvider>,
  document.getElementById('root')
);
