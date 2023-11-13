import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDashboardContext } from "./DashboardLayout"


function SmallNavBar() {
  const {handleToggleSidebar} = useDashboardContext()
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 transition-opacity opacity-100">
      <div className="bg-white inset-1 p-8 rounded shadow-lg">
      <FontAwesomeIcon onClick={handleToggleSidebar} icon={faXmark} />
        Sidebar
      </div>


    </div>
  )
}

export default SmallNavBar
