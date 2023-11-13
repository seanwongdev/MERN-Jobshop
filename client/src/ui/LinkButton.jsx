import { Link } from "react-router-dom"

function LinkButton({children, to}) {
  const className = ""

  return (
    <Link to={to}>
      {children}
    </Link>
  )
}

export default LinkButton
