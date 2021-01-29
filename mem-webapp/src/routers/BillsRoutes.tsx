import React from "react";
import {  Switch, Route } from "react-router-dom";
import CategoriesTab from "../components/BillsPages/components/CategoriesTab";
import CurrentTab from "../components/BillsPages/components/CurrentTab";
import DueDatesTab from "../components/BillsPages/components/DueDatesTab";
import HistoricTab from "../components/BillsPages/components/HistoricTab";



function BillsRoutes(){
  return (
      <Switch>
        <Route path="/bills/current" component={CurrentTab} />
        <Route path="/bills/historic" component={HistoricTab} />
        <Route path="/bills/categories" component={CategoriesTab} />
        <Route path="/bills/due-dates" component={DueDatesTab} />
      </Switch>
  );
}

export default BillsRoutes;