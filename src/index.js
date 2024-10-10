import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './App.scss'
import ScrollToTop from "./ScrollToTop";
import ColorPicker from './components/colorPicker/ColorPicker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
  <BrowserRouter>
  <ScrollToTop />
      <App />
  </BrowserRouter>
</React.Fragment>
);


