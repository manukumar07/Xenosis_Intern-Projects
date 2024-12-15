import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PieChartComponent = ({ data }) => {
  const COLORS = ["#1DA1F2", "#00C49F", "#FFBB28", "#FF8042"];
  const highlightColor = "#FF5733";

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="category"
          outerRadius={150}
          fill="#8884d8"
          label={({ name, value }) => `${name}: ${value}`}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={
                entry.category === "Followers"
                  ? highlightColor
                  : COLORS[index % COLORS.length]
              }
            />
          ))}
        </Pie>
        <Tooltip formatter={(value, name) => [value, `${name}`]} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
