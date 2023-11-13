import { Outlet } from "react-router-dom"


import Header from "./Header"
import SmallNavBar from "./SmallNavBar"
import BigNavBar from "./BigNavBar"
import { createContext, useContext, useState } from "react"

const DashboardContext = createContext()

function DashboardLayout() {
  const [showSidebar,setShowSidebar] = useState(true);
  const handleToggleSidebar = () => {
    setShowSidebar((showSidebar)=>!showSidebar)
  }

  return (
    <DashboardContext.Provider value={{handleToggleSidebar, showSidebar}}>

      <div className="grid grid-cols-1 md:grid-cols-[1fr,13fr] gap-8 me-4">
        <div className="md:hidden">
        {showSidebar && <SmallNavBar />}
        </div>
        <div className="hidden md:grid">
          <BigNavBar />
        </div>
        <div className="">

          <Header />
          <Outlet />
        </div>



      </div>
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => useContext(DashboardContext)

export default DashboardLayout
