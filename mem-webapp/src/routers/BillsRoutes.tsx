import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CurrentTab from "../components/BillsPages/components/CurrentTab";



function BillsRoutes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/bills/current" component={CurrentTab} />
      </Switch>
    </BrowserRouter>
  );
}

export default BillsRoutes;