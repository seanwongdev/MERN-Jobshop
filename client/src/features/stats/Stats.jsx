import { useLoaderData } from "react-router-dom";
import JobBarChart from "./JobBarChart";

export const loader = async () => {
  const res = await fetch("/api/v1/jobs/monthly-stats");
  const { data } = await res.json();

  return data;
};

function Stats() {
  const { stats } = useLoaderData();
  console.log(stats);

  return (
    <div>
      Monthly Stats
      {stats.map((element) => (
        <p>
          {element.date} - {element.totalJobs} jobs
        </p>
      ))}
      ;
      <JobBarChart data={stats} />
    </div>
  );
}

export default Stats;
