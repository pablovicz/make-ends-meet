import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BillsPage from "../components/BillsPages";
import HomeHeader from "../components/HomeHeader";
import Sidebar from "../components/Sidebar";



function Routes(){
  return (
    <BrowserRouter>
      <HomeHeader name="Pablo"/>
      <Sidebar />
      <div className="pages-container">
        <Switch>
          <Route path="/bills" exact>
            <BillsPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default Routes;
