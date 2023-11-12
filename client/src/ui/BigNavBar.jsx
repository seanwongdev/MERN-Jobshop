import { Link } from "react-router-dom"
import LinkButton from "./LinkButton"

function BigNavBar() {
  return (
    <div className="flex flex-col">
      <Link to="/">JobShop</Link>

      <LinkButton to="/dashboard"> Add Job </LinkButton>

      <LinkButton to="/dashboard/jobs"> View Jobs </LinkButton>

      <LinkButton to="/dashboard/stats"> View Summary </LinkButton>

      <LinkButton to="/dashboard/profile"> View Profile </LinkButton>



    </div>
  )
}

export default BigNavBar
