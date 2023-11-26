import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../ui/Button";
import { useDashboardContext } from "../../ui/DashboardLayout";
import { faCaretDown, faCircleUser } from "@fortawesome/free-solid-svg-icons";

function LogoutContainer() {
  const { showLogout, setShowLogout, user, logoutUser } = useDashboardContext();
  return (
    <div className="">
      <Button
        type="navbar"
        onClick={() => setShowLogout((showLogout) => !showLogout)}
      >
        <span className="flex items-center justify-evenly">
          <FontAwesomeIcon icon={faCircleUser} />
          {user.firstName[0].toUpperCase() +
            user.firstName.toLowerCase().slice(1)}
          <FontAwesomeIcon icon={faCaretDown} />
        </span>
      </Button>
      <div className="absolute top-20">
        {showLogout && (
          <Button type="navbar" onClick={logoutUser}>
            Logout
          </Button>
        )}
      </div>
    </div>
  );
}

export default LogoutContainer;
