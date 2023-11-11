import { Outlet } from "react-router-dom"

import SideNavBar from "./SideNavBar"
import Header from "./Header"

function Dashboard() {
  return (
    <div>
      <Header />
      <div>

      <SideNavBar />
      <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
