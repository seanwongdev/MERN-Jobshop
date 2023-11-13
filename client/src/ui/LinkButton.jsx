import { Link } from "react-router-dom"

function LinkButton({children, to, onClick}) {
  const className = ""



  return (
    <Link to={to} onClick={onClick}>
      {children}
    </Link>
  )
}

export default LinkButton
