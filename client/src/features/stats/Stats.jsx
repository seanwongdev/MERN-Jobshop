import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  const res = await fetch("/api/v1/jobs/monthly-stats");
  const { data } = await res.json();

  return data;
};

function Stats() {
  const { stats } = useLoaderData();
  function getMonthName(monthNumber) {
    const date = new Date(2023, monthNumber - 1, 1);
    const options = { month: "long" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  }
  return (
    <div>
      Monthly Stats
      {stats.map((month) => {
        return (
          <p key={month._id}>
            {month.totalJobs} jobs in {getMonthName(month._id.month)}
            {month._id.year}
          </p>
        );
      })}
    </div>
  );
}

export default Stats;
