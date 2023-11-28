import { useLoaderData } from "react-router-dom";

import Job from "./Job";
import JobSearch from "./JobSearch";
import BasicTable from "../../components/BasicTable";
import { useDashboardContext } from "../../ui/DashboardLayout";
import { useEffect } from "react";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  // console.log(new URLSearchParams(params).toString());
  const searchQuery = params.search;
  const typeQuery = params.type;
  const statusQuery = params.status;
  const fetchUrl =
    "/api/v1/jobs" +
    (searchQuery ? `?search=${searchQuery}` : "") +
    (typeQuery ? (searchQuery ? "&" : "?") + `type=${typeQuery}` : "") +
    (statusQuery
      ? (searchQuery || typeQuery ? "&" : "?") + `status=${statusQuery}`
      : "");
  const res = await fetch(fetchUrl);
  const { data } = await res.json();

  return data;
};

function JobList() {
  const { setActive } = useDashboardContext();
  useEffect(() => {
    setActive(1);
  }, [setActive]);
  const { jobs } = useLoaderData();
  console.log(jobs);
  return (
    <>
      {/* <JobSearch />
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
      </div> */}
      <div className="py-24 md:py-6 mx-6 md:mx-10 md:px-10 md:border md:rounded-md md:border-primary md:border-opacity-30 md:border-l-0  ">
        <BasicTable jobs={jobs} />
      </div>
    </>
  );
}

export default JobList;
