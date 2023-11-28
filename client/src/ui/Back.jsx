import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function Back() {
  const navigate = useNavigate();
  return (
    <button
      className="focus:outline-none border-0"
      onClick={() => navigate("/")}
    >
      <FontAwesomeIcon className="text-3xl " icon={faChevronLeft} />
    </button>
  );
}

export default Back;
