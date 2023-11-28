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

function JobBarChart({ data }) {
  console.log(data);

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
        <YAxis dataKey="totalJobs" allowDecimals={false} />
        <Tooltip />
        <Legend verticalAlign="bottom" height={5} />
        <Bar name="Total Applications" dataKey="totalJobs" fill="#003f5c" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default JobBarChart;
