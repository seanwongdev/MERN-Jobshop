import Button from "../../ui/Button";
import { useDashboardContext } from "../../ui/DashboardLayout"

function LogoutContainer() {
  const { showLogout, setShowLogout, user, logoutUser } = useDashboardContext();
  return (
    <div className="">
      <Button onClick={()=>setShowLogout((showLogout)=> !showLogout)}>{user.firstName}</Button>
      <div className="absolute">
        {showLogout && <Button onClick={logoutUser}>Logout</Button>}
      </div>
    </div>
  )
}

export default LogoutContainer
