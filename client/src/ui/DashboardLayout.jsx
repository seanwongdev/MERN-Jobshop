import { Outlet } from "react-router-dom"


import Header from "./Header"
import SmallNavBar from "./SmallNavBar"
import BigNavBar from "./BigNavBar"

function DashboardLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="hidden">
        <SmallNavBar />

      </div>
      <div className="hidden md:grid md:col-auto">
        <BigNavBar />

      </div>
      <div className="col-span-1">

        <Header />
        <Outlet />
      </div>



    </div>
  )
}

export default DashboardLayout
