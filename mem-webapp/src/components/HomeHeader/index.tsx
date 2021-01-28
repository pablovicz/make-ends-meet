import { FiBell } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './styles.css';

type Props = {
  name: string;
}


function HomeHeader({name} : Props){
  return (
    <div className="header-container">
      <div className="greeting-container">
        <div className="greeting-text">
          <h1 className="hello-user">Hello, {name}!</h1>
          <h3 className="welcome-user">welcome back!</h3>
        </div>
        <Link className="notification-container" to="/notifications">
        <FiBell className="notification-icon" />
      </Link>
      </div>
      
    </div>
  );
}

export default HomeHeader;