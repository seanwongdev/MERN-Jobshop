import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  CartesianGrid,
  Legend,
} from "recharts";
import { jobStatusOptions } from "../../utils/constants";

function BreakdownBarChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        {jobStatusOptions.map((option, index) => {
          return (
            <Bar
              key={index}
              stackId="a"
              dataKey={option.option}
              fill={option.color}
            />
          );
        })}

        <Legend verticalAlign="bottom" height={5} />
      </BarChart>
      ;
    </ResponsiveContainer>
  );
}

export default BreakdownBarChart;
