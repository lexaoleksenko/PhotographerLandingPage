import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import CssBaseline from '@mui/material/CssBaseline';

import './index.scss';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import { store } from './redux/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </>,
);
