import { useLoaderData } from "react-router-dom"
import Job from "./Job"
import JobSearch from './JobSearch'

export const loader = async () => {
  const res = await fetch('/api/v1/jobs')
  const {data} = await res.json()
  console.log(data)
  return data
}

function JobList() {
  const {jobs} = useLoaderData();
  return (
    <>
      <JobSearch />
      <p>
        Time to see list of jobs below:
      </p>
      <div className="grid md:grid-cols-2 md:gap-8">
        {jobs.map((job)=> <Job company={job.company}  position={job.position} type={job.type} status={job.status} createdAt={job.createdAt} key={job._id}/>)}

      </div>
    </>
  )
}

export default JobList
