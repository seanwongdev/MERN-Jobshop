import { Link } from "react-router-dom";

function Button({ children, onClick, type, disabled, to }) {
  const styles = {
    primary: "",
    secondary: "",
    navbar: "",
    toolbar: "",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  return (
    <button
      type="primary"
      onClick={onClick}
      disabled={disabled}
      className={styles[type]}
    >
      {children}
    </button>
  );
}

export default Button;
