import {
  Pie,
  PieChart,
  Sector,
  useActiveTooltipDataPoints,
  useIsTooltipActive,
} from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const RADIAN = Math.PI / 180;

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

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

  let fillOpacity;

  if (isAnyPieActive && !isThisPieActive) {
    fillOpacity = 0.5;
  } else {
    fillOpacity = 1;
  }

  return (
    <Sector
      {...props}
      fill={COLORS[props.index % COLORS.length]}
      stroke="none"
      fillOpacity={fillOpacity}
      style={{ transition: "fill-opacity 0.3s ease" }}
    />
  );
};


function MyPieChart(){
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        labelLine={false}
        label={renderCustomizedLabel}
        dataKey="value"
        shape={MyCustomPie}
      />
    </PieChart>
  );
}

export default MyPieChart;