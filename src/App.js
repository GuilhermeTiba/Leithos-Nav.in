//import NavBar from "./components/NavBar";
import React from "react";
import AutenticateContext from "./contexts/autenticateContext";
import CountContext from "./contexts/countContext";
import NavbarContext from "./contexts/navbarContext";
import NecessaryInfoContext from "./contexts/necessaryInfoContext";
import PatientInfoContext from "./contexts/patientInfoContext";
import ProfileContext from "./contexts/profileContext";
import SectorBackendContext from "./contexts/sectorBackendContext";
import ToggleContext from "./contexts/toggleContext";
import RoutesComponent from "./routes/Routes";

function App() {
  return (
    <SectorBackendContext>
      <ProfileContext>
        <NavbarContext>
          <NecessaryInfoContext>
            <PatientInfoContext>
              <CountContext>
                <AutenticateContext>
                  <ToggleContext>
                    <RoutesComponent />
                  </ToggleContext>
                </AutenticateContext>
              </CountContext>
            </PatientInfoContext>
          </NecessaryInfoContext>
        </NavbarContext>
      </ProfileContext>
    </SectorBackendContext>
  );
}

export default App;
