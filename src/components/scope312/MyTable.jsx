import { getMaterialTotals } from "../../utils/materialCalculations";

function MyTable() {
  const totals = getMaterialTotals();

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
