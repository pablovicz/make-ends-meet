import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/login-page";
import SplashPage from "../pages/SplashPage/splash-page";



function ExternalRoutes(){
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" component={SplashPage} exact/>
          <Route path="/login" component={LoginPage} />
        </Switch>
    </BrowserRouter>
    
  );
}

export default ExternalRoutes;