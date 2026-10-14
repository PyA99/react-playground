import PieChart from "../components/scope312/MyPieChart";
import MyTable from "../components/scope312/MyTable";
import RandomFact from "../components/scope312/RandomFact";

function Scope312({ onSelectMaterial }) {
  return (
    <div>
      <h2>Scope 3.12</h2>
      <h3>Användning av sålda produkter</h3>
      <div class="container text-center">
        <div class="row row-cols-2">
          <div class="col">
            <MyTable onSelectMaterial={onSelectMaterial}/>
          </div>
          <div class="col">
            <PieChart />
          </div>
        </div>
      </div>
      <RandomFact/>
    </div>
  );
}

export default Scope312;