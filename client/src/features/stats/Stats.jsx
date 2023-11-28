import { useLoaderData } from "react-router-dom";
import JobBarChart from "./JobBarChart";
import Button from "../../ui/Button";
import { useEffect, useState } from "react";
import BreakdownBarChart from "./BreakdownBarChart";
import { useDashboardContext } from "../../ui/DashboardLayout";
import Infographics from "./Infographics";

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
  const { stats, breakdown, portalSplit } = useLoaderData();

  return (
    <div className="py-6 px-6 md:px-10 md:mx-10 md:border md:rounded-md md:border-primary md:border-opacity-30 md:border-l-0 ">
      <div className="mt-6 ">
        <Infographics data={portalSplit} />
      </div>

      <div className="my-12">
        <Button
          type="secondary"
          onClick={() => setShowSplit((showSplit) => !showSplit)}
        >
          {showSplit ? "Show Total Per Month" : "Show Status Breakdown"}
        </Button>
        <p className="text-center font-bold text-xl mt-4">Monthly Stats</p>
        {showSplit ? (
          <BreakdownBarChart data={breakdown} />
        ) : (
          <JobBarChart data={stats} />
        )}
      </div>
    </div>
  );
}

export default Stats;
