import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

import './splash-page.css';

import LogoImg from '../../assets/logos/splash-logo.gif';
import Header from '../../components/Header/Header';



function SplashPage(){
  return (
    <div className="splash-container">
      <Header />
      <div className="splash-content">
        <div className="splash-title-container">
             <h1>
              Register your accounts
              <br/>
              and organize your
              <br/>
              financial life!
            </h1>
          <Link to="/login" type="button" className="splash-button">Get Started</Link>
        </div>
        <div className="splash-logo">
          <img src={LogoImg} alt="MEM" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SplashPage;