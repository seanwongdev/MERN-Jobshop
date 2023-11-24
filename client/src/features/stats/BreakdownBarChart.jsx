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
        <YAxis dataKey="Application" allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="Application" fill="#E63946" barSize={20} />
        <Bar dataKey="Interview" fill="#EDAE49" barSize={20} />
        <Bar dataKey="Offer" fill="#3376BD" barSize={20} />
        <Bar dataKey="Rejected" fill="#00798C" barSize={20} />
      </BarChart>
      ;
    </ResponsiveContainer>
  );
}

export default BreakdownBarChart;
