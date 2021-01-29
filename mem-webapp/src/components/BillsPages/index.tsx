import BillsRoutes from '../../routers/BillsRoutes';
import Navbar from './components/NavBar';
import './styles.css';

function BillsPage(){
  return (
    <div className="bills-page-container">
      <Navbar />
      <div className="bills-tab-container">
        <BillsRoutes />
      </div>
    </div>
  );
}

export default BillsPage;