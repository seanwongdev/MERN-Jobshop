import LogoutContainer from "../features/user/LogoutContainer";
import Button from "./Button";
import Dark from "./Dark";
import { useDashboardContext } from "./DashboardLayout";

function Header() {
  const { logoutUser } = useDashboardContext();
  return (
    <div className="flex justify-between md:px-8">
      <h1>Dashboard</h1>

      <div className="flex items-center">
        <LogoutContainer />
        <Dark />
      </div>
    </div>
  );
}

export default Header;
