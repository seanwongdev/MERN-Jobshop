
import Button from "./Button";
import Dark from "./Dark"
import { useDashboardContext } from "./DashboardLayout"
import SideToolBar from "./SideToolBar"

function Header({user}) {
  const {logoutUser} = useDashboardContext();
  return (
    <div className="flex justify-between">
      <SideToolBar  />

      <h1>Dashboard</h1>

      <div>
        <p>{user.firstName}</p>
        <Button onClick={logoutUser}>Logout</Button>
        <Dark />
      </div>
    </div>
  )
}

export default Header
