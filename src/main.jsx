import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import StoreContextProvider from './context/StoreContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StoreContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreContextProvider>
);
