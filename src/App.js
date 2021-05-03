import { Router } from './Routes/Router';
import './App.css';
import GlobalState from './global/GlobalState';

function App() {
  return (
    <GlobalState>
      <Router/>
    </GlobalState>
  );
}

export default App;
