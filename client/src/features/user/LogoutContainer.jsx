import Button from "../../ui/Button";
import { useDashboardContext } from "../../ui/DashboardLayout";

function LogoutContainer() {
  const { showLogout, setShowLogout, user, logoutUser } = useDashboardContext();
  return (
    <div className="">
      <Button
        type="navbar"
        onClick={() => setShowLogout((showLogout) => !showLogout)}
      >
        {user.firstName}
      </Button>
      <div className="absolute">
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
