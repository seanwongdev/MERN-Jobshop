import { useContext } from "react"
import { Outlet } from "react-router-dom"

function CreateJob() {
  const user = useContext(Outlet)
  return (

    <div>
      Create job
      {user}
    </div>
  )
}

export default CreateJob
