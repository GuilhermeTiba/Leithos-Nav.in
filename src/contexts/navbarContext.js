import React, { useContext, useState } from "react";

const NavBarContext = React.createContext();

const NavbarContext = ({ children }) => {
  const [activeDashboardBg, toggleDashboardBg] = useState(true);
  const [activeSectorBg, toggleSectorBg] = useState(false);
  const [activeProfileBg, toggleProfileBg] = useState(false);

  return (
    <NavBarContext.Provider
      value={{
        activeDashboardBg,
        toggleDashboardBg,
        activeSectorBg,
        toggleSectorBg,
        activeProfileBg,
        toggleProfileBg,
      }}
    >
      {children}
    </NavBarContext.Provider>
  );
};

export const useNavbarProps = () => useContext(NavBarContext);
export default NavbarContext;
