import React, { useState, useMemo } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import classmanes from 'classnames';
import { Dashboard } from "./pages";
import { DASHBOARD } from "./routes";
import SideMenu from "./components/sideMenu";
import Header from './components/header'

const App = (props) => {
  const [isMenuOpen, setMenuState] = useState(false)

  const menuClasses = useMemo(() => {
    return classmanes("side-menu-container h-100", isMenuOpen ? "open" : '')
  }, [isMenuOpen])

  const openMenu = () => {
    setMenuState(true);
  }

  const closeMenu = () => {
    setMenuState(false);
  }

  return (
    <div className="container-fluid px-0 mx-0 h-100 bg-light ">
      <div className="d-flex h-100 position-relative">
        <div className={menuClasses}>
          <SideMenu closeMenu={closeMenu}/>
        </div>
        <div className="d-flex flex-column">
          <Header openMenu={openMenu}/>
          <div className="overflow-auto">
            <Switch>
              <Route path={DASHBOARD.ROOT} component={Dashboard} />
              <Redirect to={DASHBOARD.ROOT} />
            </Switch>
          </div>
        </div>
        {isMenuOpen && <div className="cover" onClick={closeMenu}></div>}
      </div>
    </div>
  );
};

export default App;
