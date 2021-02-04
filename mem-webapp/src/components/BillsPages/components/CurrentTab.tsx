import EnhancedTable from "../../Table/Table";
import TabHeader from "./TabHeader";


function CurrentTab(){

 
  return (
    <div style={{ height: 430, width: '100%' }} className="tab-content">
      <TabHeader />
      <EnhancedTable />
    </div>
  );
}

export default CurrentTab; 