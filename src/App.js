//import NavBar from "./components/NavBar";
import React from 'react';
import AutenticateContext from './contexts/autenticateContext';
import CountContext from './contexts/countContext';
import ToggleContext from './contexts/toggleContext';
import RoutesComponent from './routes/Routes';

function App() {
  return (
    <CountContext>
      <AutenticateContext>
      <ToggleContext>
        <RoutesComponent/>
      </ToggleContext>
    </AutenticateContext>
    </CountContext>
  )
}

export default App;
