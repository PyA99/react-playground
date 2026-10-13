import PieChart from "../components/scope312/MyPieChart";
import MyTable from "../components/scope312/MyTable";
import RandomFact from "../components/scope312/RandomFact";

function Scope312({ onSelectMaterial }) {
  return (
    <div>
      <h2>Scope 3.12</h2>
      <PieChart />
      <MyTable onSelectMaterial={onSelectMaterial}/>
      <RandomFact/>
    </div>
  );
}

export default Scope312;
