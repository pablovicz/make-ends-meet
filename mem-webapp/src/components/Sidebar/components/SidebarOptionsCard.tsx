import { useState } from "react";

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import LocalAtmOutlinedIcon from '@material-ui/icons/LocalAtmOutlined';
import GavelOutlinedIcon from '@material-ui/icons/GavelOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import { Link } from "react-router-dom";

function SidebarOptionsCard(){


  const [value, setValue] = useState('home');

  function handleClick(id : string){

    setValue(id);

  };

  function handleChange(value : string, name : string, type : string){
    if(type === 'button'){
      if(value === name){
        return "sidebar-btn active";
      } else {
        return "sidebar-btn disabled";
      }
    }
    if(type === 'icon'){
      if(value === name){
        return "sidedar-icon active-icon";
      } else {
        return "sidedar-icon";
      }
    }
    if(type === 'title') {
      if(value === name){
        return "sidebar-title active-text";
      } else {
        return "sidebar-title disabled-text";
      }
    }
  }

 
  return (
    <div className="sidebar-options-container">
      <Link to="/" type="button" onClick={() => handleClick('home')} className={handleChange(value, 'home', 'button')}>
          <HomeOutlinedIcon className={handleChange(value, 'home', 'icon')} fontSize="default"/>
          <h1 className={handleChange(value, 'home', 'title')}>Home</h1>
      </Link>
    
      <Link to="/dashboard" type="button" onClick={() => handleClick('dashboard')} className={handleChange(value, 'dashboard', 'button')}>
        <DashboardOutlinedIcon className={handleChange(value, 'dashboard', 'icon')} fontSize="default"/>
        <h1 className={handleChange(value, 'dashboard', 'title')}>Dashboard</h1>
      </Link>
      <Link to="/bills/current" type="button" onClick={() => handleClick('bill')} className={handleChange(value, 'bill', 'button')}>
        <LocalAtmOutlinedIcon className={handleChange(value, 'bill', 'icon')} fontSize="default"/>
        <h1 className={handleChange(value, 'bill', 'title')}>Bills</h1>
      </Link>
      <Link to="/debts" type="button" onClick={() => handleClick('debt')} className={handleChange(value, 'debt', 'button')}>
        <GavelOutlinedIcon className={handleChange(value, 'debt', 'icon')} fontSize="default"/>
        <h1 className={handleChange(value, 'debt', 'title')}>Debts</h1>
      </Link>
      <Link to="/account/settings" type="button" onClick={() => handleClick('settings')} className={handleChange(value, 'settings', 'button')}>
        <SettingsOutlinedIcon className={handleChange(value, 'settings', 'icon')} fontSize="default"/>
        <h1 className={handleChange(value, 'settings', 'title')}>Account Settings</h1>
      </Link>
    </div>
  );
  

}

export default SidebarOptionsCard;
