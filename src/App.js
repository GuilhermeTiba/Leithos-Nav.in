//import NavBar from "./components/NavBar";
import React from 'react';
import ToggleContext from './contexts/toggleContext';
import RoutesComponent from './routes/Routes';

function App() {
  return (
      <ToggleContext>
        <RoutesComponent/>
      </ToggleContext>
  )
}

export default App;
