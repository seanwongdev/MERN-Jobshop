import { useLoaderData } from "react-router-dom";
import Job from "./Job";
import JobSearch from "./JobSearch";

export const loader = async ({ request }) => {
  console.log(request.url);
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  console.log(params);
  const res = await fetch("/api/v1/jobs");
  const { data } = await res.json();

  return data;
};

function JobList() {
  const { jobs } = useLoaderData();
  return (
    <>
      <JobSearch />
      <p>Time to see list of jobs below:</p>
      <div className="grid md:grid-cols-2 md:gap-8">
        {jobs.map((job) => (
          <Job
            company={job.company}
            id={job._id}
            position={job.position}
            type={job.type}
            status={job.status}
            createdAt={job.createdAt}
            key={job._id}
          />
        ))}
      </div>
    </>
  );
}

export default JobList;
