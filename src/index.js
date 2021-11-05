import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import DataContext from './components/DataContext';

ReactDOM.render(
  <React.StrictMode>
    <DataContext>
      <App />
    </DataContext>
  </React.StrictMode>,
  document.getElementById('root')
);