
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

function TabHeader(){


  return ( 
    <div className="tab-header">
      <div className="tab-header-seach-box">
        <input placeholder="search" type="text" />
        <SearchIcon />
      </div>
      
      <Link type="button" to="/bills/current/add-new" className="tab-header-button">
        <AddIcon className="tab-header-button-icon"/>
        <h1 className="tab-header-button-title" >ADD BILL</h1>
      </Link>
    </div>
  );

}

export default TabHeader;