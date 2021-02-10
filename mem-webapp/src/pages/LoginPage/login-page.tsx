import './login-page.css';

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Link } from 'react-router-dom';

import {ReactComponent as FacebookIcon} from '../../assets/icons/facebook-icon.svg';
import {ReactComponent as GoogleIcon} from '../../assets/icons/google-icon.svg';
import LoginLogo from '../../assets/logos/login-logo.svg';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { useState } from 'react';

function LoginPage(){

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  
  function handlePasswordVisibility(){

    setPasswordVisibility(!passwordVisibility);
  }

  return (
    <div className="login-container">
      <Header />
      <div className="page-content">
        <div className="login-form">
          <h1 className="login-title">Login</h1>
          <div className="form-container">
            <form className="form-content">
              <div className="username-container">
                <AccountCircleIcon fontSize="small"/>
                <input type="text" className="username-input" placeholder="your user name"/>
              </div>
              <div className="password-container">
                <VpnKeyIcon fontSize="small" />
                <input type={passwordVisibility ? "text" : "password"} className="password-input" placeholder="your password"/>
                <button type="button" className="show-password-button" onClick={handlePasswordVisibility}>
                  {
                    passwordVisibility ? (
                      <VisibilityOffIcon fontSize="small" color="disabled"/>
                    
                    ) : (
                      <VisibilityIcon fontSize="small" color="disabled"/>
                  )
                  }  
                </button>  
              </div>
                 
              <div className="checkbox-container">
                <input type="checkbox" id="remember" name="remenber"/>
                <label>Remember me</label>
              </div>
              <button type="submit" className="submit-button">LOGIN</button>
            </form>
            <div className="sign-in-container">
              <div className="or-container">
                <hr />
                <h2>Or</h2>
                <hr/>
              </div>
              <div className="sign-in-options">
                <Link to="/facebook-login" className="facebook-button">
                  <FacebookIcon className="facebook-icon"/>
                  <h2>Facebook Login</h2>
                </Link>
                <Link to="/google-login" className="google-button">
                  <GoogleIcon className="google-icon"/>
                  <h2>Google Login</h2>
                </Link>
              </div>
              <div className="sign-up-container">
                <h2 className="new-here-text">Don't have a account yet?</h2>
                <Link to="/sign-up"className="sign-up-text">
                  <h2>Sign up!</h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src={LoginLogo} alt="login" className="login-image"/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;