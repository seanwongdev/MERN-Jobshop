import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom"


import Header from "./Header"
import SmallNavBar from "./SmallNavBar"
import BigNavBar from "./BigNavBar"
import { createContext, useContext, useState } from "react"
import { toast } from "react-toastify"


const DashboardContext = createContext()

export const loader = async function() {
  try {
    const res = await fetch("/api/v1/users/current-user")
    const {data} = await res.json();
    return data
  } catch (error) {
    return redirect('/')
  }
}

function DashboardLayout() {
  const {user} = useLoaderData()

  const [showSidebar,setShowSidebar] = useState(true);
  const navigate = useNavigate()
  const handleToggleSidebar = () => {
    setShowSidebar((showSidebar)=>!showSidebar)
  }

  const logoutUser = async () => {
    navigate('/')
    const res = await fetch("/api/v1/users/logout")
    const data = res.json();
    console.log(data)
    toast.success('Successfully logged out')
  }

  return (
    <DashboardContext.Provider value={{handleToggleSidebar, showSidebar, logoutUser}}>

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

          <Header  user={user}/>
          <Outlet context={{user}}/>
        </div>



      </div>
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => useContext(DashboardContext)

export default DashboardLayout
