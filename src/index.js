import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './Routes';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <Routes />
  </React.StrictMode>,
);