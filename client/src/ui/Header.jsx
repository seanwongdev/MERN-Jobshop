
import Dark from "./Dark"
import SideToolBar from "./SideToolBar"

function Header({onClick}) {
  return (
    <div className="flex justify-between">
      <SideToolBar onClick={} />

      <h1>Dashboard</h1>

      <Dark />
    </div>
  )
}

export default Header
