import { useLoaderData } from "react-router-dom";
import JobBarChart from "./JobBarChart";
import Button from "../../ui/Button";
import { useEffect, useState } from "react";
import BreakdownBarChart from "./BreakdownBarChart";
import { useDashboardContext } from "../../ui/DashboardLayout";

export const loader = async () => {
  const res = await fetch("/api/v1/jobs/monthly-stats");
  const { data } = await res.json();

  return data;
};

function Stats() {
  const { setActive } = useDashboardContext();
  useEffect(() => {
    setActive(2);
  }, [setActive]);
  const [showSplit, setShowSplit] = useState(false);
  const { stats, breakdown } = useLoaderData();
  console.log(stats);

  return (
    <div className="py-6 md:px-10 md:mx-10 border rounded-md border-primary border-opacity-30 border-l-0">
      <Button
        type="secondary"
        onClick={() => setShowSplit((showSplit) => !showSplit)}
      >
        {showSplit ? "Show Total Per Month" : "Show Status Breakdown"}
      </Button>
      <p className="text-center font-bold text-xl ">Monthly Stats</p>
      {showSplit ? (
        <BreakdownBarChart data={breakdown} />
      ) : (
        <JobBarChart data={stats} />
      )}
    </div>
  );
}

export default Stats;
