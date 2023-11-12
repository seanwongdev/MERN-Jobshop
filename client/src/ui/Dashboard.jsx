import { Outlet } from "react-router-dom"

import SideNavBar from "./SideNavBar"
import Header from "./Header"

function Dashboard() {
  return (
    <div>
      <SideNavBar />
      <Header />

      <Outlet />

    </div>
  )
}

export default Dashboard
