function SupplierList({ suppliers }) {
    return (
        <div>
            <h3>Alla leverantörer</h3>

            {suppliers.map((supplier) => (
                <div key={supplier.id}>
                    <p>{supplier.name}</p>
                    <p>{supplier.total} kr</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default SupplierList;