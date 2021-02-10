import './header.css';

import {ReactComponent as MainLogo} from '../../assets/logos/mem-main-logo.svg';

function Header(){
  return (
    <div className="header-container">
      
      <div className="header-logo-container">
        <MainLogo className="logo-image" />
        <h1 className="logo-title">Make Ends Meet</h1>
      </div>
      
    </div>
  );
}

export default Header;