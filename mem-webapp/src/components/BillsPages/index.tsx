import BillsRoutes from '../../routers/BillsRoutes';
import Navbar from './components/NavBar';
import './styles.css';

function BillsPage(){
  return (
    <div className="bills-page-container">
      <Navbar />
      <BillsRoutes />
    </div>
  );
}

export default BillsPage;