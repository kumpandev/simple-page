import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Dashboard } from "./pages";
import { DASHBOARD } from "./routes";
import SideMenu from "./components/sideMenu";

const App = (props) => {
  return (
    <div className="container-fluid px-0 mx-0 h-100">
      <div className="d-flex h-100">
        <div className="col-2 px-0 h-100">
          <SideMenu />
        </div>
        <div className="d-flex flex-column col-10 px-0">
          <Switch>
            <Route path={DASHBOARD.ROOT} component={Dashboard} />
            <Redirect to={DASHBOARD.ROOT} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
