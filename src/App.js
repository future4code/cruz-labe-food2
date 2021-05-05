import React, {useState} from 'react';
import './App.css';
import Router from './Routes/Router';
import GlobalState from './global/GlobalState';
import InitialAnimation from "./components/InitialAnimation/InitialAnimation";

const App = () => {
  const [start, setStart] = useState(true)

  return (
    <div className="App">
      <div className="Container">
      <GlobalState>
      {start ? <InitialAnimation setStart={setStart}/> : 
        <Router/> }
      </GlobalState>
      </div>
    </div>
  );
}

export default App;
