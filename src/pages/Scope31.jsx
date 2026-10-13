import { useState } from "react";

import mockSuppliers from "../data/mockSuppliers.json";
import SupplierList from "../components/scope31/SupplierList";


function Scope31() {
  
  const suppliers = mockSuppliers["3.1"].suppliers;

  const [selectedId, setSelectedId] = useState(1);
  return (
    <div>
      <h2>Scope 3.1!</h2>

      <SupplierList 
      suppliers={suppliers}
      selectedId={selectedId}
      onSelect={setSelectedId}
      />
    </div>
  );
}

export default Scope31;
