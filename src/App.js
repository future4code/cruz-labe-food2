import React from 'react';
import './App.css';

import Router from './Routes/Router';
import GlobalState from './global/GlobalState';

const App = () => {
  return (
    <div className="App">
      <div className="Conteiner">
      <GlobalState>
        <Router/>
      </GlobalState>
      </div>
    </div>
  );
}

export default App;
