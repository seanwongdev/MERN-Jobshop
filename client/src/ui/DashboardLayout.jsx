import { Outlet, redirect, useLoaderData } from "react-router-dom"


import Header from "./Header"
import SmallNavBar from "./SmallNavBar"
import BigNavBar from "./BigNavBar"
import { createContext, useContext, useState } from "react"


const DashboardContext = createContext()

export const loader = async function() {
  try {
    const res = await fetch("/api/v1/users/current-user")
    const data = await res.json();
    return data
  } catch (error) {
    return redirect('/')
  }
}

function DashboardLayout() {
  const { firstName } = useLoaderData()

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
          <div className={showSidebar ? "hidden md:grid ml-[0px] transition-transform duration-300 ease-in-out" : "hidden md:grid ml-[-250px] transition-transform duration-300 ease-in-out" }  >
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
