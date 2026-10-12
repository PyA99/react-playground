// 
function SupplierList({ suppliers, selectedId, onSelect }) {
    return (
        <div>
            <h3>Alla leverantörer</h3>


            {suppliers.map((supplier) => (
                <div key={supplier.id}>
                    <button
                    type="button"
                    onClick={() => onSelect(supplier.id)}
                    >
                        {supplier.name}
                    </button>
                    <p>{supplier.total} kr</p>

                    {selectedId === supplier.id && (
                        <p>Vald leverantör</p>
                    )}
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default SupplierList;