//import NavBar from "./components/NavBar";
import React from 'react';
import AutenticateContext from './contexts/autenticateContext';
import CountContext from './contexts/countContext';
import NecessaryInfoContext from './contexts/necessaryInfoContext';
import PatientInfoContext from './contexts/patientInfoContext';
import ToggleContext from './contexts/toggleContext';
import RoutesComponent from './routes/Routes';

function App() {
  return (
    <NecessaryInfoContext>
      <PatientInfoContext>
        <CountContext>
          <AutenticateContext>
          <ToggleContext>
            <RoutesComponent/>
          </ToggleContext>
        </AutenticateContext>
        </CountContext>
      </PatientInfoContext>
    </NecessaryInfoContext>
  )
}

export default App;
