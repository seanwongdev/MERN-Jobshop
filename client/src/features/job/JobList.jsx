import { useLoaderData } from "react-router-dom"
import Job from "./Job"

export const loader = async () => {
  const res = await fetch('/api/v1/jobs')
  const {data} = await res.json()
  console.log(data)
  return data
}

function JobList() {
  const {jobs} = useLoaderData();
  return (
    <div>
      Time to see list of jobs below:
      {jobs.map((job)=> <Job/>)}

    </div>
  )
}

export default JobList
