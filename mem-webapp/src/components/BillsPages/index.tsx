import BillsRoutes from '../../routers/BillsRoutes';
import './styles.css';

function BillsPage(){
  return (
    <div className="bills-page-container">
      <h1>Bills</h1>
      <BillsRoutes />
    </div>
  );
}

export default BillsPage;