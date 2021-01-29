import { Fragment, useState } from "react";
import { Link} from "react-router-dom";

function Navbar(){

  const [value, setValue] = useState('current');

  function handleClick(id : string){

    setValue(id);

  };

  function handleChange(value : string , name : string){
    if(value === name) {
      return "navbar-button navbar-actived";
    } else {
      return "navbar-button navbar-disabled";
    }
  }

   return (
    <>
    <div className="navbar-container">
      <div className="navbar-container-options">
      <Link type="button" to="/bills/current" onClick={() => handleClick('current')} className={handleChange(value,'current')}>
         <h1 >CURRENT</h1>
      </Link>
      <Link type="button" to="/bills/historic" onClick={() => handleClick('historic')} className={handleChange(value,'historic')}>
        <h1 >HISTORIC</h1>
      </Link>
      <Link type="button" to="/bills/categories" onClick={() => handleClick('categories')} className={handleChange(value,'categories')}>
        <h1 >CATEGORIES</h1>
      </Link>
      <Link type="button" to="/bills/due-dates" onClick={() => handleClick('due-dates')} className={handleChange(value,'due-dates')}>
        <h1 >DUE DATES</h1>
      </Link>
      </div>
    </div>
</>
  );
}

export default Navbar;