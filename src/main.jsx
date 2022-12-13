import React from 'react';
import ReactDOM from 'react-dom/client';
// Imporacion de Router-React
import { BrowserRouter } from 'react-router-dom';
// Importacion del CSS
import './styles.css';
// Importacion de componentes
import { HeroesApp } from './HeroesApp';
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>
)
