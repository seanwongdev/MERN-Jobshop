import { Link } from "react-router-dom";

function Button({ children, onClick, type, disabled, to }) {
  const styles = {
    primary: "",
    secondary:
      "border-secondary hover:border-secondary rounded-md hover:bg-light w-auto py-2 px-4 transition focus:outline-0 active:tracking-widest active:shadow",
    navbar:
      "border-secondary hover:border-secondary bg-bright hover:bg-light md:bg-primary md:border-0 rounded-md md:text-bright py-2 px-4 shadow-md w-[120px] md:hover:bg-secondary transition active:tracking-wider focus:outline-0 ",
    toolbar: "focus:outline-none border-0",
    dark: "bg-secondary hover:bg-dark hover:text-bright rounded-md text-bright w-auto py-2 px-4 transition",
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
