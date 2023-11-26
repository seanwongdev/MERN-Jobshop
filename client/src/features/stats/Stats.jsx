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
  const { stats, breakdown } = useLoaderData();
  console.log(stats);

  return (
    <div className="my-4 md:px-8">
      <Button
        type="primary"
        onClick={() => setShowSplit((showSplit) => !showSplit)}
      >
        {showSplit ? "Show Status Breakdown" : "Show Total Per Month"}
      </Button>
      <p className="text-center font-bold text-xl ">Monthly Stats</p>
      {showSplit ? (
        <JobBarChart data={stats} />
      ) : (
        <BreakdownBarChart data={breakdown} />
      )}
    </div>
  );
}

export default Stats;
