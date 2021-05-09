import React, { useState } from "react";
import "./App.css";
import Router from "./Routes/Router";
import GlobalState from "./global/GlobalState";
import InitialAnimation from "./components/InitialAnimation/InitialAnimation";

const App = () => {
  const [start, setStart] = useState(true);

  return (
    <div className="App">
      {start && <InitialAnimation setStart={setStart} />}
      <div className="Container">
        <GlobalState>
          <Router />
        </GlobalState>
      </div>
    </div>
  );
};

export default App;
