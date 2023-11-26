import { NavLink } from "react-router-dom";

function LinkButton({ children, to, onClick }) {
  const className = "flex items-center justify-left gap-5 group";

  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={className}
      activeClassName="active-link"
    >
      {children}
    </NavLink>
  );
}

export default LinkButton;
