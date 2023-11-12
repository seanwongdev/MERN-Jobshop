import { Link } from "react-router-dom"

function LinkButton({children, to}) {
  return (
    <Link to={to}>
      {children}
    </Link>
  )
}

export default LinkButton
