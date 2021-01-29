import './styles.css';

import {ReactComponent as MainLogo} from '../../assets/logos/mem-main-logo.svg';

import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';


import SidebarOptionsCard from './components/SidebarOptionsCard';


function Sidebar(){
  return (
    <div className="sidebar-container">
      <Link to="/" className="sidebar-logo-container">
        <MainLogo className="sidebar-logo-container-image"/>
        < div className="sidebar-logo-container-text" >
          <h1>MAKE</h1>
          <h1 className="sidebar-logo-container-middle-text">ENDS</h1>
          <h1>MEET</h1>
        </div>
      </Link>
      <SidebarOptionsCard />
      <Link className="logout-container" to="/logout">
        <FiLogOut className="logout-icon"/>
      </Link>
    </div>
  );
}

export default Sidebar;