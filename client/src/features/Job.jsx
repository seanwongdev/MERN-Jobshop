import { useLoaderData } from "react-router-dom"
import { getAllJobs } from "../services/apiJob";

function Job() {
  const job = useLoaderData();

  return (
    <div>
      hi this is steve
    </div>
  )
}

export async function loader() {
  const job = await getAllJobs();
  return job
}

export default Job
