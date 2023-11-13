
import Dark from "./Dark"
import SideToolBar from "./SideToolBar"

function Header() {
  return (
    <div className="flex justify-between">
      <SideToolBar  />

      <h1>Dashboard</h1>

      <Dark />
    </div>
  )
}

export default Header
