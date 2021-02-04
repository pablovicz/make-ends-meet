import { BrowserRouter, Switch, Route } from "react-router-dom";
import SplashPage from "../pages/SplashPage/splash-page";



function ExternalRoutes(){
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" component={SplashPage} />
        </Switch>
    </BrowserRouter>
    
  );
}

export default ExternalRoutes;