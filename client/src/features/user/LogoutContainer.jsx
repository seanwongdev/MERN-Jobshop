import Button from "../../ui/Button";
import { useDashboardContext } from "../../ui/DashboardLayout"

function LogoutContainer() {
  const { showLogout, setShowLogout } = useDashboardContext();
  return (
    <div className="">
      <Button onClick={()=>setShowLogout((showLogout)=> !showLogout)}>John</Button>
      <div className="absolute">
        {showLogout && <Button>Logout</Button>}
      </div>
    </div>
  )
}

export default LogoutContainer
