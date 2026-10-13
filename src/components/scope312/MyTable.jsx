
import data from "../../data/mockSuppliers.json"

function MyTable() {
    const products = data["3.12"]["sold product"];

    const totals = products.reduce((result, product) => { 
        product.materials.forEach(material => {
            if (!result[material.name]) {
                result[material.name] = 0;
            }

            result[material.name] +=
                material.kg * product.quantity;
        });

        return result;
    }, {});

    return (
        <table className="table table-success table-striped">
            <thead>
                <tr>
                    <th>Material</th>
                    <th>Vikt (kg)</th>
                </tr>
            </thead>

            <tbody>
                {Object.entries(totals).map(([material, kg]) => (
                    <tr key={material}>
                        <td>{material}</td>
                        <td>{kg.toLocaleString("sv-SE")}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default MyTable;
