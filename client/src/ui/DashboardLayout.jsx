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

      <div className="md:grid md:grid-cols-[auto,1fr] md:gap-8 px-8 w-screen md:px-5 ">
        <div>

          <div className="md:hidden">
            {showSidebar && <SmallNavBar />}
          </div>
          <div className="hidden md:grid">
            <BigNavBar />
          </div>
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
