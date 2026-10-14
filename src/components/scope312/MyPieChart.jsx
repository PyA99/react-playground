import { getMaterialTotals } from "../../utils/materialCalculations";
import {
  Pie,
  PieChart,
  Sector,
  Tooltip,
  useActiveTooltipDataPoints,
  useIsTooltipActive,
} from "recharts";

// Hämta de summerade vikterna från utils - materialCalculations
const totals = getMaterialTotals();

// Gör om resultatet till det format som Recharts behöver
const data = Object.entries(totals).map(([name, value]) => ({
  name,
  value,
}));

//Allt detta fram till markering är skapandet av pajdiagrammet
const RADIAN = Math.PI / 180;

const COLORS = [ // Färgerna återanvänds om det finns fler material än färger.
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#A28BFE",
  "#FF6699",
  "#66CCCC",
  "#99CC33",
];

function getColor(index) {
  return COLORS[index % COLORS.length];
}

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  if (
    cx == null ||
    cy == null ||
    innerRadius == null ||
    outerRadius == null
  ) {
    return null;
  }

  const radius =
    innerRadius + (outerRadius - innerRadius) * 0.5;

  const x =
    Number(cx) +
    radius * Math.cos(-(midAngle ?? 0) * RADIAN);

  const y =
    Number(cy) +
    radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > Number(cx) ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
  );
};

const MyCustomPie = (props) => {
  const p = useActiveTooltipDataPoints();
  const isAnyPieActive = useIsTooltipActive();

  const isThisPieActive =
    isAnyPieActive && props.payload === p?.[0];

  const fillOpacity =
    isAnyPieActive && !isThisPieActive ? 0.5 : 1;

  return (
    <Sector
      {...props}
      fill={getColor(props.index)}
      stroke="none"
      fillOpacity={fillOpacity}
      style={{ transition: "fill-opacity 0.3s ease" }}
    />
  );
};// Fram till hit

function MyPieChart() {
// Här stoppar vi in den riktiga datan vi hämtade högst upp, i pajdiagrammet
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        nameKey="name"
        dataKey="value"
        labelLine={false}
        label={renderCustomizedLabel}
        shape={MyCustomPie}
      />
      <Tooltip
        formatter={(value, name) => [
          `${value} kg`,
          name,
        ]}
      />
    </PieChart>
  );
}

export default MyPieChart;
