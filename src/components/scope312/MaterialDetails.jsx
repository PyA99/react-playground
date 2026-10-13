import { getMaterialDetails } from "../../utils/materialCalculations";

function MaterialDetails({ materialName, onBack }) {
  const products = getMaterialDetails(materialName);

  const totalKg = products.reduce(
    (sum, product) => sum + product.totalKg,
    0
  );
  
return (
    <div>
      <button
        type="button"
        className="btn btn-outline-secondary mb-3"
        onClick={onBack}
      >
        ← Tillbaka
      </button>

      <h2>{materialName}</h2>

      <p>
        Total mängd:{" "}
        <strong>{totalKg.toLocaleString("sv-SE")} kg</strong>
      </p>

      <h4>Produkter som innehåller materialet</h4>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Produkt</th>
            <th>Antal sålda</th>
            <th>Kg per produkt</th>
            <th>Total vikt (kg)</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.productName}</td>
              <td>{product.quantity}</td>
              <td>{product.kgPerProduct}</td>
              <td>
                {product.totalKg.toLocaleString("sv-SE")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MaterialDetails;