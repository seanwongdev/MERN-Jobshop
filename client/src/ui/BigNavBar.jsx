import { Link } from "react-router-dom"
import LinkButton from "./LinkButton"
import links from "../utils/dashboardLinks"

function BigNavBar() {
  return (
    <div className="flex flex-col gap-4">
      <Link to="/">JobShop</Link>

      {links.map((link)=> {
        const {path, text, icon} = link;
        return <LinkButton to={path} key={text}> {icon} {text}</LinkButton>
      })}

    </div>
  )
}

export default BigNavBar
