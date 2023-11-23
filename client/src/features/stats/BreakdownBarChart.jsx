import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  CartesianGrid,
} from "recharts";

function BreakdownBarChart({ data }) {
  console.log(data);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis dataKey="totalJobs" allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="status" fill="#363737" />
        <Bar dataKey="" fill="#82ca9d" />
      </BarChart>
      ;
    </ResponsiveContainer>
  );
}

export default BreakdownBarChart;
