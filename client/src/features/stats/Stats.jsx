import { useLoaderData } from "react-router-dom";
import JobBarChart from "./JobBarChart";
import Button from "../../ui/Button";
import { useState } from "react";
import BreakdownBarChart from "./BreakdownBarChart";

export const loader = async () => {
  const res = await fetch("/api/v1/jobs/monthly-stats");
  const { data } = await res.json();

  return data;
};

function Stats() {
  const [showSplit, setShowSplit] = useState(false);
  const { stats } = useLoaderData();
  console.log(stats);

  return (
    <div>
      Monthly Stats
      <Button
        type="primary"
        onClick={() => setShowSplit((showSplit) => !showSplit)}
      >
        Show Breakdown
      </Button>
      {showSplit ? (
        <JobBarChart data={stats} />
      ) : (
        <BreakdownBarChart data={stats} />
      )}
    </div>
  );
}

export default Stats;
