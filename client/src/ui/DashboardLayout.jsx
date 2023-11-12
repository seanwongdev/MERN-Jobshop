import { Outlet } from "react-router-dom"


import Header from "./Header"
import SmallNavBar from "./SmallNavBar"
import BigNavBar from "./BigNavBar"
import { useState } from "react"

function DashboardLayout() {
  const [showSidebar,setShowSidebar] = useState(true);
  const handleToggleSidebar = () => {
    setShowSidebar(()=>!showSidebar)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr,13fr] gap-8 me-4">
      <div className="md:hidden">
        <SmallNavBar />
      </div>
      <div className="hidden md:grid ">
        <BigNavBar />
      </div>
      <div className="">

        <Header onClick={handleToggleSidebar}/>
        <Outlet />
      </div>



    </div>
  )
}

export default DashboardLayout
